import React from "react";
import FormTextView from "./FormTextView";
import styles from "../utility/Styles";
import {View} from 'react-native'

export type ListItemProps = {
    name:string,
    occupation:string,
    company:string,
    emailAddress:string,
    phoneNumber:string,
    linkedInUrl:string
}

function ListItem({data}:{data:ListItemProps}){
    return(
        <View style={styles.cardStyle}>
          <FormTextView title='Name : ' value={data.name}/>
          <FormTextView title='Occupation : ' value={data.occupation}/>
          <FormTextView title='Company : ' value={data.company}/>
          <FormTextView title='Email Address : ' value={data.emailAddress}/>
          <FormTextView title='Phone Number : ' value={data.phoneNumber}/>
          <FormTextView title='LinkedInUrl : ' value={data.linkedInUrl}/> 
          </View>
    )
}


export default ListItem