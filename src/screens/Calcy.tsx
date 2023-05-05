import React, { useState } from "react";
import {FlatList, Text, TouchableOpacity, View} from 'react-native'

export default function Calcy(){
    const[resut,setResult]=useState('')
    const[text,setText] = useState('')
    const[text1,setText1]=useState('')
    const[opr,setOpr] = useState('')
    return(
        <View style={{flex:1,padding:10,backgroundColor:'black'}}>
        <Text
        style={{
            width:'100%',
            height:150,
            borderWidth:1,
            borderRadius:20,
            borderColor:'white',
            backgroundColor:'grey',
            textAlign:'center',
            textAlignVertical:'center',
            fontSize:30,
            color:'white'
        }}>{resut}</Text>

        <View style={{flexDirection:'row',marginTop:20}}>
        <FlatList 
        data={numberArr}
        renderItem = {({item})=>
          <TouchableOpacity
          onPress={()=>{
          switch(item){
            case '=':{
                setResult(calculate(parseInt(text,10),parseInt(text1,10),opr).toString())
                break
            }
            case 'C':
                setResult('')
                setText('')
                setText1('')
                setOpr('')
                break
          default :{
        
            let res 
                if(opr===''){
                    res = text+item
                setText(res)
                }
                else{
                    res = text1+item
                setText1(res)
                }
                setResult(res)
                break
          }
        }
          }
        }>
          <Text
          style={{
            width:60,
            height:60,
            borderWidth:1,
            borderColor: 'white',
            borderRadius:40,
            padding:10,
            margin:10,
            marginTop:10,
            fontSize:20,
            textAlign:'center',
            textAlignVertical:'center',
            backgroundColor:'grey',
            color:'white'
          }}>{item}</Text>
          </TouchableOpacity>
        }
        horizontal={false}
        numColumns={3}
        />

<FlatList 
        data={operatorArr}
        renderItem = {({item})=>
       <TouchableOpacity
       onPress={()=>setOpr(item)}>
        <Text
          style={{
            width:60,
            height:60,
            borderWidth:1,
            borderColor: 'white',
            borderRadius:40,
            padding:10,
            margin:10,
            marginTop:10,
            fontSize:25,
            textAlign:'center',
            textAlignVertical:'center',
            backgroundColor:'#ff8c00',
            color:'white'
          }}>{item}</Text>
          </TouchableOpacity>
        }
       
        />
        </View>
        </View>
    )
}

const numberArr:string[] = ['1','2','3','4','5','6','7','8','9','0','=','C']

const operatorArr:string[] = ['+','-','*','/']

const calculate = (num1:number,num2:number,opr:string)=>{
    let result = 0
    
    switch(opr){
        case '+':
         result = num1 + num2
         break
         case '-':
         result = num1 - num2
         break
         case '*':
         result = num1 * num2
         break
         case '/':
         result = num1 / num2
         break
    }
    return result
}