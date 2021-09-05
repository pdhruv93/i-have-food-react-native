import React, {useRef, useState, useEffect, createContext} from 'react';
import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ListView from '../components/ListView';
import database from '@react-native-firebase/database';
import BottomSheet from '../components/BottomSheet';
import moment from 'moment';

export const SelectedEntryContext = createContext();

export default HomeScreen = (props) => {

    console.log("HomeScreen Loaded!!!");

    const bottomSheetRef=useRef();
    const [filterPincode, setFilterPincode] = useState("");
    const [entriesFetchedFromDB, setEntriesFetchedFromDB] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState({});


    useEffect(() => {
        console.log("Getting entries list from Firebase!!");
        database().ref('/entries')
        .on('value', (snapshot) => {
            console.log("Successfully Fetched entries from Firebase!!");
            let data = snapshot.val();
            
            //Preproecessing the response to make it compatible with FlatList
            var processedResponse=[];
            Object.keys(data).map(key =>{
                if(moment(data[key].expiry, "DD.MM.YYYY").isAfter(moment()))
                {
                    //Entry is not expired
                    var dummyJSONObject={};
                    dummyJSONObject['id'] = key;
                    dummyJSONObject['data'] = data[key];

                    if(filterPincode!="")
                    {
                        if(data[key].pincode === filterPincode)
                            processedResponse.push(dummyJSONObject);
                    }
                    else
                        processedResponse.push(dummyJSONObject);
                }
            })
            setEntriesFetchedFromDB(processedResponse);
        })
    }, [filterPincode]);


    return (
        <>
            <View style={[style.yellow_bar]}>
                <Text style={[style.yellow_bar_text]}>
                    i have Food
                </Text>
            </View>

            <View style={{margin: 20}}>
                <TextInput placeholder="Filter by pincode" 
                    style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                    val={filterPincode}
                    onChangeText={pincode =>{
                        setFilterPincode(pincode);
                    }} 
                />
            </View>
            
            <SelectedEntryContext.Provider value={{selectedEntry, setSelectedEntry, bottomSheetRef}} >
                <SafeAreaView style={{display: 'flex', flexDirection: 'column', marginBottom: 200}}>
                    <FlatList
                        data={entriesFetchedFromDB}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={
                            ({ item }) => 
                                <ListView entry={item}/>
                        }
                    />
                </SafeAreaView>

                <BottomSheet/>
            </SelectedEntryContext.Provider>
        </>
    );

};


const style = StyleSheet.create({

    yellow_bar: {
        display: 'flex',
        flexDirection: 'row',
        height: 80, 
        backgroundColor: '#ffc224', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    yellow_bar_text: {
        fontFamily: 'Anton', 
        fontSize: 25,
    },
    TextInputStyleClass:{
        color: 'black',
        textAlign: 'center',
        borderColor: 'white',
        backgroundColor : "#FFFFFF",
        height: 40
    },

});