import React from 'react';
import {Text,View, StyleSheet, ScrollView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {handleNewEntry} from '../components/UtilityFunctions';

export default FormScreen = (props) => {

    const ValidationSchema = Yup.object().shape({
        title: Yup.string().required('Required').min(5, 'Min 5 characters').max(20, 'Max 20 chars'),
        fullName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
        locality: Yup.string().required('Required').min(3, 'Min 3 characters').max(10, 'Max 10chars'),
        pincode: Yup.number().required('Required'),
        expiry: Yup.string().matches(/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/, 'dd.MM.yyyy format only'),
        description: Yup.string().required('Required').max(100, 'Max 100 chars'),
    });

    return(
        <View style={{margin : 20}}>
            <Text style={{fontSize: 40, fontFamily: 'Anton', color: '#262b2f'}}>
                Add new entry
            </Text>
            <Text>{"\n"}</Text>

            
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{title:'', fullName:'', email:'', phone:'', locality:'', pincode:'', expiry:'', description:''}}
                onSubmit={(values, actions) => {
                    handleNewEntry(values)
                    .then(() =>{
                        console.log("Successfully added new entry for Food in Firebase DB!!");
                        actions.resetForm();
                        props.navigation.jumpTo("Home");
                    })
                }}
            >
                {(props) =>(
                    <ScrollView style={[style.container]}>
                        <TextInput label="Title" placeholder="Enter your food title" 
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.title} onChangeText={props.handleChange('title')}
                        />
                        <Text style={[style.error]}>{props.errors.title}</Text>
                        <Text>{"\n"}</Text>

                        <TextInput label="Name" placeholder="Enter your full name" 
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.fullName} onChangeText={props.handleChange('fullName')}
                        />
                        <Text style={[style.error]}>{props.errors.fullName}</Text>
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
                        <Text style={[style.error]}>{props.errors.phone}</Text>
                        <Text>{"\n"}</Text>

                        <TextInput label="Locality" placeholder="Don't enter your complete home address"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.locality} onChangeText={props.handleChange('locality')}
                        />
                        <Text style={[style.error]}>{props.errors.locality}</Text>
                        <Text>{"\n"}</Text>

                        <TextInput label="Pincode" placeholder="For better filtering"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.pincode} onChangeText={props.handleChange('pincode')}
                        />
                        <Text style={[style.error]}>{props.errors.pincode}</Text>
                        <Text>{"\n"}</Text>

                        <TextInput label="Expiry Date" placeholder="dd.MM.yyyy format"
                            style={style.TextInputStyleClass} placeholderTextColor="#3b4956"
                            value={props.values.expiry} onChangeText={props.handleChange('expiry')}
                        />
                        <Text style={[style.error]}>{props.errors.expiry}</Text>
                        <Text>{"\n"}</Text>

                        <TextInput label="Description" placeholder="Complete description of your food including allergy details, suitable for"
                            style={[style.TextInputStyleClass, {height: 200}]} placeholderTextColor="#3b4956"
                            value={props.values.description} onChangeText={props.handleChange('description')}
                        />
                        <Text style={[style.error]}>{props.errors.description}</Text>
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