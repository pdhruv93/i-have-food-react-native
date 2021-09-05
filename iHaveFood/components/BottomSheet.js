import React, { useContext } from 'react';
import {View} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import EntryDetailScreen from '../screens/EntryDetailScreen'
import {SelectedEntryContext} from '../screens/HomeScreen';

export default HomeScreen = (props) => {

    const {selectedEntry, setSelectedEntry, bottomSheetRef}=useContext(SelectedEntryContext);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <RBSheet ref={bottomSheetRef} height={500}
            openDuration={500}
            customStyles={{
                container: {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: '#f6f7f9'
                }
            }}
            >
                <EntryDetailScreen/>
            </RBSheet>
        </View>
    );   
};