import * as React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

export default function SplashScreen({navigation}) {

    setTimeout(() =>{
        //Wait for 4seconds and then redirect to MainScreen
        navigation.replace('BottomTab');
    }, 4000);

    return (
        <View style={[style.screen]}>
            <Text style={{fontSize: 80, color: '#fea894', fontFamily: 'Anton'}}>
                i Have Food
            </Text>
        </View>
    );
}


const style = StyleSheet.create({

    screen: {
        display: 'flex',
        flexDirection: 'column', 
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#214349',
    },
})