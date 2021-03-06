import React, {useContext} from 'react';
import {View, Text,StyleSheet, Pressable} from 'react-native';
import {SelectedEntryContext} from '../screens/HomeScreen';


export default ListView = (props)=> {

    const {selectedEntry, setSelectedEntry, bottomSheetRef}=useContext(SelectedEntryContext);

    return(
        <Pressable style={[style.parent]} onPress={() => {setSelectedEntry(props.entry); bottomSheetRef.current?.open()} }>
            <View style={[style.left]}>
                <Text style={[style.left_text]}>{props.entry.data.title.charAt(0)}</Text>
            </View>

            <View style={[style.middle]}>
                <Text style={{color:'#262b2f', fontSize:20, fontWeight: 'bold'}}>{props.entry.data.title}</Text>
                <Text style={{fontSize:15, fontWeight: '400'}}>{props.entry.data.fullName}</Text>
                <Text style={{color: '#737f8b'}}>{props.entry.data.locality}</Text>
            </View>

            <Text style={[style.right]}>{props.entry.data.expiry}</Text>
        </Pressable>
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
        flex: 1, 
        color: '#c22146', 
        fontWeight: 'bold'
    }

});