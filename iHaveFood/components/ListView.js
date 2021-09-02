import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


export default ListView = (props)=> {

    return(
        <View style={[style.parent]}>
            <View style={[style.left]}>
                <Text style={[style.left_text]}>{props.entry.title.charAt(0)}</Text>
            </View>

            <View style={[style.middle]}>
                <Text style={{color:'#262b2f', fontSize:20, fontWeight: 'bold'}}>{props.entry.title}</Text>
                <Text style={{fontSize:15, fontWeight: '400'}}>{props.entry.body}</Text>
                <Text style={{color: '#737f8b'}}>Invoice</Text>
            </View>

            <Text style={[style.right]}>{props.entry.id}</Text>
        </View>
    )
}



const style = StyleSheet.create({

    parent: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 15
    },

    left: {
        flex: 0.5, 
        backgroundColor: '#a6ebec', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 7, 
        height: 60
    },

    left_text: {
        color: '#1e3263', 
        fontWeight: '400', 
        fontSize:30, 
        fontFamily: 'Plaster'
    },

    middle: {
        display: 'flex', 
        flexDirection: 'column', 
        flex: 3, 
        paddingHorizontal: 20
    },

    right: {
        flex: 0.5, 
        color: '#78838f', 
        fontWeight: 'bold'
    }

});