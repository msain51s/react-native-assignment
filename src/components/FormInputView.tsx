import React, { Dispatch, SetStateAction } from "react";
import { KeyboardTypeOptions, TextInput } from 'react-native'
import styles from "../utility/Styles";

type FormInputProps ={
    hint:string,
    keyboardType:KeyboardTypeOptions,
    setText:Dispatch<SetStateAction<string>>
}
export default function FormInputView(props:FormInputProps){
    return(
        <TextInput 
        style= {styles.textInputStyle}
        placeholder={props.hint}
        keyboardType={props.keyboardType}
        onChangeText={(text) => {props.setText(text)}}
        />
    )
}