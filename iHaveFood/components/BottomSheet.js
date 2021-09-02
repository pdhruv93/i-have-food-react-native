import React from 'react';
import {Text, View} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import SearchScreen from '../screens/SearchScreen'

export default HomeScreen = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <RBSheet ref={props.bottomSheefRef} height={500}
            openDuration={500}
            customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: '#f6f7f9'
                }
            }}
            >
                <SearchScreen/>
            </RBSheet>
        </View>
    );   
};