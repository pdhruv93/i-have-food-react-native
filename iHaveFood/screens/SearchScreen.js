import React from 'react';
import {Text,View, StyleSheet, ScrollView} from 'react-native';
import { TextInput} from 'react-native-paper';
import database from '@react-native-firebase/database';

export default SearchScreen = (props) => {

    return (
        <View style={{margin : 20}}>
            <Text style={{fontSize: 40, fontFamily: 'Anton', color: '#262b2f'}}>
                Filter entries
            </Text>
            <Text>{"\n"}</Text>

            <ScrollView>
                <TextInput label="Pincode" placeholder="Searches exact pincode" 
                    style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                    onChangeText={pincode =>{
                        if(pincode.length > 4)
                        {
                            database().ref('/entries')
                            .once('value')
                            .then(snapshot => {
                                let data = snapshot.val();
                                console.log("Successfully Fetched entries filtered by pinCode");

                                //Preproecessing the response to make it compatible with FlatList
                                var entriesFilteredByPincode=[];
                                Object.keys(data).map(key =>{
                                    if(data[key].pincode === pincode)
                                    {
                                        var dummyJSONObject={};
                                        dummyJSONObject['id'] = key;
                                        dummyJSONObject['data'] = data[key];
                                        entriesFilteredByPincode.push(dummyJSONObject);
                                    }	
                                })
                                props.setEntriesFetchedFromDB(entriesFilteredByPincode);
                            });
                        } 
                    }} 
                />
            </ScrollView >
        </View>
        
    );
};


const style = StyleSheet.create({

    TextInputStyleClass:{
        color: 'black',
        textAlign: 'center',
        height: 70,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 18,
        backgroundColor : "#FFFFFF",
    },

    ButtonStyleClass:{
        padding: 10,
        fontSize:30,
        textAlign: 'center',
        height: 65,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        backgroundColor : "#0050c2",
    }
})
