import React, {useRef, useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { IconButton } from 'react-native-paper';
import ListView from '../components/ListView';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from '../components/BottomSheet';

export default HomeScreen = (props) => {

    const bottomSheefRef=useRef();

    const entries = [
        { id: 0, title: 'Balbasaur', body: 'JavaScript & JQuery: Web Development',},
        { id: 1, title: 'Squirtle',  body: 'To Sleep in a Cloud of Stars' },
        { id: 2, title: 'Pikachu',  body: 'Dance on the Moon' },
        { id: 3, title: 'Ekans',  body: 'Best birthday party with enemies' },
        { id: 4, title: 'Meow',  body: 'Second thought changed my life' },
        { id: 5, title: 'Pidgeot',  body: 'Master data science with deep neural network' },
        { id: 6, title: 'Psycho',  body: 'Rest Api with SpringBoot Data Rest Modified Title2' },
        { id: 7, title: 'Togipi',  body: 'Rest Api with Django rest framework' },
        { id: 8, title: 'Rock',  body: 'Change life with Yoga' },
        { id: 9, title: 'Ash',  body: 'How the mind works' },
        { id: 10, title: 'Charlizard',  body: 'How to analyze people' }
    ];

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
                    data={entries}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={
                        ({ item }) => 
                            <ListView entry={item}/>
                    }
                />
            </SafeAreaView>

            <BottomSheet bottomSheefRef={bottomSheefRef}/>
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