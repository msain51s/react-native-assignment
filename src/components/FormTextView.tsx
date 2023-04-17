import React from 'react-native'
import { View,Text } from 'react-native'
import styles from '../utility/Styles'

type FormProps = {
    title:string,
    value:string
}

function FormTextView(props:FormProps){
    return(
        <View style={styles.formViewStyle}>
         <Text style={styles.textStyleMedium}>{props.title}</Text>
         <Text style={styles.textStyleMedium}>{props.value}</Text>
        </View>
    )
}

export default FormTextView