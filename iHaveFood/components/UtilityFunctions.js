import axios from 'axios';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';


export const handleNewEntry=async(entry)=>{

	var deviceId="";
	await messaging().getToken()
	.then((token) => {
		console.log("New Firebase Messaging Token recieved!!");
		deviceId = token;
	})
	.finally(()=>{
		console.log("Creating new Entry...");
		database().ref("/entries/")
		.push({
			title: entry.title,
			fullName: entry.fullName, 
			email: entry.email, 
			phone: entry.phone, 
			locality: entry.locality,
			pincode: entry.pincode,
			expiry : entry.expiry,
			description: entry.description,
			deviceId: deviceId,
		});
	})
	
	//Assuming that a user who added entry for a pincode might have interest in other people entries for the same pin code
	var deviceIdsToSendNotifications=[];
	database().ref('/entries')
	.once('value', (snapshot) => {
		let data = snapshot.val();

		console.log("Preparing list of other deviceIds to which notification will be sent!!");
		Object.keys(data).map(key =>{
			if(data[key].deviceId!=null && data[key].deviceId!=""
				&& data[key].pincode === entry.pincode
				&& data[key].deviceId != deviceId
				&& deviceIdsToSendNotifications.indexOf(data[key].deviceId) === -1 
			)
				deviceIdsToSendNotifications.push(data[key].deviceId);
		})

		if(deviceIdsToSendNotifications.length>0)
		{
			console.log("Generating push notifications for other users who created entries in same Pincode");
			axios.post('https://fcm.googleapis.com/fcm/send',{
				"registration_ids": deviceIdsToSendNotifications,
				"notification": {
					"title": "iHaveFood",
					"body": "There is a new food entry with title "+entry.title+" in your area. Expiry Date:"+entry.expiry,
					"icon": "ic_notification",
					"vibrate": 1,
					"sound": 1,
					"priority": "high"
				}
			},
			{
				headers: 
				{
					'Content-Type': 'application/json',
					'Authorization' : 'key=AAAA4bWJScI:APA91bEXP3eOGFuC8XHCTql__GJfxZbC-ashdUoMIrKlgg0ahu9jt-ILfkyLnjDioCBFwhe1jZQrneHj0rhSzdyW08ZAhcNokae2G5mEDh5bsCqm5TzfMTZik2w6cDYpHXzDLQmKO65g'
				}
			})
			.then(res => {
				console.log("Successfully Sent Notifications to "+deviceIdsToSendNotifications.length+" DeviceIDs");
			})
			.catch((error) => {
				console.log("Some error while sending notifications to devices");
				console.error(error);
			})
		}
		else
		{
			console.log("No DeviceIds to send notifications!!");
		}
		
	})
}