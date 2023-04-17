import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import FormInputView from "../components/FormInputView";
import styles from "../utility/Styles";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from '../redux/action-creator'
import { Item } from "../redux/reducers/reducer";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
type NavigationFormProps = NativeStackScreenProps<RootStackParamList,'FormScreen'>

export default function FormScreen({navigation}:NavigationFormProps){
  const[name,setName] = useState('')
  const[occupation,setOccupation] = useState('')
  const[company,setCompany] = useState('')
  const[email,setEmail] = useState('')
  const[phone,setPhone] = useState('')
  const[linkedIn,setLinkedIn] = useState('')

  const validateForm = () =>{
    if(!name.trim()){
      Alert.alert('Alert','Enter Name')
      return
    }
    if(!occupation.trim()){
      Alert.alert('Alert','Enter Occupation')
      return
    }
    if(!company.trim()){
      Alert.alert('Alert','Enter Company')
      return
    }
    if(!email.trim()){
      Alert.alert('Alert','Enter email')
      return
    }
    if(!phone.trim() || phone.length<10){
      Alert.alert('Alert','Enter Valid Phone Number')
      return
    }
    
    // Success : add form data to the list
    const item :Item = {
      name:name,
      occupation:occupation,
      company:company,
      emailAddress:email,
      phoneNumber:phone,
      linkedInUrl:linkedIn
    }
    addItemToList(item)
    navigation.pop()
  }

  const dispatch = useDispatch()
  const {addItemToList} = bindActionCreators(actionCreator,dispatch)

  return(
    <View>
        <FormInputView hint="Name" keyboardType= 'default' setText={setName}/>
        <FormInputView hint="Occupation/Title" keyboardType='default' setText={setOccupation}/>
        <FormInputView hint="Company" keyboardType='default' setText={setCompany}/>
        <FormInputView hint="Email Address" keyboardType='email-address' setText={setEmail}/>
        <FormInputView hint="Phone Number"keyboardType='numeric' setText={setPhone}/>
        <FormInputView hint="LinkedIn Url (optional)" keyboardType='default' setText={setLinkedIn}/>
        <TouchableOpacity onPress={()=>validateForm()}>
        <Text style={styles.buttonStyle}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}