import React, {useRef, useState, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { IconButton } from 'react-native-paper';
import ListView from '../components/ListView';
import database from '@react-native-firebase/database';
import BottomSheet from '../components/BottomSheet';

export default HomeScreen = (props) => {

    console.log("HomeScreen Loaded!!!");

    const bottomSheefRef=useRef();
    const [entriesFetchedFromDB, setEntriesFetchedFromDB] = useState([]);


    useEffect(() => {
        console.log("Getting entries list from Firebase!!");
        database().ref('/entries')
        .on('value', (snapshot) => {
            let data = snapshot.val();
            var processedResponse=[];
            //Preproecessing the response to make it compatible with FlatList
            Object.keys(data).map(key =>{
                var dummyJSONObject={};
                dummyJSONObject['id'] = key;
                dummyJSONObject['data'] = data[key];
                processedResponse.push(dummyJSONObject);
            })
            setEntriesFetchedFromDB(processedResponse);
        })
    }, []);


    return (
        <>
            <View style={[style.yellow_bar]}>
                <Text style={[style.yellow_bar_text]}>
                    i have Food
                </Text>
                <View style={{paddingTop: 12}}>
                    <IconButton
                        icon="camera"
                        size={25}
                        onPress={() => bottomSheefRef.current?.open()}
                    />
                </View>
            </View>

            <SafeAreaView style={{display: 'flex', flexDirection: 'column', marginBottom: 80}}>
                <FlatList
                    data={entriesFetchedFromDB}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={
                        ({ item }) => 
                            <ListView entry={item}/>
                    }
                />
            </SafeAreaView>

            <BottomSheet setEntriesFetchedFromDB={setEntriesFetchedFromDB} bottomSheefRef={bottomSheefRef}/>
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
    }

});