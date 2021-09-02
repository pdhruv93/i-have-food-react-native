import React from 'react';
import {Text,View, StyleSheet, ScrollView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default SearchScreen = (props) => {



    return (
        <View style={{margin : 20}}>
            <Text style={{fontSize: 40, fontFamily: 'Anton', color: '#262b2f'}}>
                Filter entries
            </Text>
            <Text>{"\n"}</Text>

            <ScrollView>
                <TextInput label="Pincode" placeholder="Searches exact pincode" style={style.TextInputStyleClass} placeholderTextColor="#3b4956"/>
                <Text>{"\n"}</Text>
                <Button mode="contained" style={style.ButtonStyleClass} onPress={() => console.log('Pressed')}>
                    <Text style={{fontSize: 17}}>Search</Text>
                </Button>
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
