import React, {useContext} from 'react';
import {Text,View, StyleSheet, Linking} from 'react-native';
import {SelectedEntryContext} from './HomeScreen';
import {Button } from 'react-native-paper';
import database from '@react-native-firebase/database';

export default EntryDetailScreen = (props) => {

    const {selectedEntry, setSelectedEntry, bottomSheetRef}=useContext(SelectedEntryContext);

    const deleteEntry = async () =>{
        bottomSheetRef.current?.close();
        await database().ref("/entries/"+selectedEntry.id).remove()
        .then(()=>{
            console.log("Delete Completed!!");
        })
    }

    return (
        <View style={{margin : 20}}>
            <View style={{display: 'flex', alignItems: 'center', marginBottom: 40}}>
                <Text style={{fontSize: 30, fontFamily: 'Anton', color: '#262b2f'}}>
                    {selectedEntry.data.title}
                </Text>
            </View>
            
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <View style={[style.section]}>
                    <Text style={[style.text]}>Expiry:</Text>
                    <Text>30.10.2021</Text>
                </View>

                <View style={[style.section]}>
                    <Text style={[style.text]}>Location:</Text>
                    <Text>{selectedEntry.data.locality}</Text>
                </View>

                <View style={[style.section]}>
                    <Text style={[style.text]}>Pincode:</Text>
                    <Text>{selectedEntry.data.pincode}</Text>
                </View>

                <View style={[style.section]}>
                    <Text style={[style.text]}>Creator:</Text>
                    <Text>{selectedEntry.data.fullName}</Text>
                </View>

                <View style={[style.section]}>
                    <Text style={[style.text]}>Mail:</Text>
                    <Text onPress={() => Linking.openURL('mailto:'+selectedEntry.data.email)}>
                        {selectedEntry.data.email}
                    </Text>
                </View>

                <View style={[style.section]}>
                    <Text style={[style.text]}>Phone:</Text>
                    <Text onPress={() => Linking.openURL('tel:'+selectedEntry.data.phone)}>
                        {selectedEntry.data.phone}
                    </Text>
                </View>

                <View style={[style.section]}>
                    <Text style={[style.text]}>Description:</Text>
                    <Text>{selectedEntry.data.description}</Text>
                </View>
            </View>

            <Text>{"\n"}</Text>

            <Button mode="contained" style={style.ButtonStyleClass} onPress={() => deleteEntry()} >
                <Text style={{fontSize: 17}}>Delete</Text>
            </Button>

        </View>
        
    );
};


const style = StyleSheet.create({

    text: {
        fontSize: 18, 
        fontFamily: 'Anton', 
        fontWeight: '400'
    },

    section:{
        margin: 15
    },

    ButtonStyleClass:{
        padding: 10,
        fontSize:30,
        textAlign: 'center',
        height: 65,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        backgroundColor : "red",
    },

})