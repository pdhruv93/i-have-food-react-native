import React from 'react';
import {Text,View, StyleSheet, ScrollView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default FormScreen = (props) => {

    const ValidationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return(
        <View style={{margin : 20}}>
            <Text style={{fontSize: 40, fontFamily: 'Anton', color: '#262b2f'}}>
                Add new entry
            </Text>
            <Text>{"\n"}</Text>

            
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{fullName:'', email:'', phone:'', locality:'', pincode:'', expiry:''}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) =>(
                    <ScrollView style={[style.container]}>
                        <TextInput label="Name" placeholder="Enter your full name" 
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.fullName} onChangeText={props.handleChange('fullName')}
                        />
                        <Text>{"\n"}</Text>

                        <TextInput label="Email" placeholder="Used for contacting you"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.email} onChangeText={props.handleChange('email')}
                        />
                        <Text style={[style.error]}>{props.errors.email}</Text>
                        <Text>{"\n"}</Text>

                        <TextInput label="Phone" placeholder="Optional. If missing you can be contacted over email"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.phone} onChangeText={props.handleChange('phone')}
                        />
                        <Text>{"\n"}</Text>

                        <TextInput label="Locality" placeholder="Don't enter your complete home address"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.locality} onChangeText={props.handleChange('locality')}
                        />
                        <Text>{"\n"}</Text>

                        <TextInput label="Pincode" placeholder="For better filtering"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.pincode} onChangeText={props.handleChange('pincode')}
                        />
                        <Text>{"\n"}</Text>

                        <TextInput label="Expiry Date" placeholder="dd.MM.yyyy format"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.expiry} onChangeText={props.handleChange('expiry')}
                        />
                        <Text>{"\n"}</Text>

                        <Button mode="contained" style={style.ButtonStyleClass} onPress={props.handleSubmit} >
                            <Text style={{fontSize: 17}}>Submit</Text>
                        </Button>
                        <Text>{"\n\n\n\n\n"}</Text>
                    </ScrollView >
                )}
            </Formik>
        </View>
    );
};


const style = StyleSheet.create({

    container:{
        backgroundColor:'#f6f7f9',
    },

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
    },

    error:{
        color: 'red',
    }
})
