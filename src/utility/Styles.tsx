import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerMain: {
        flex: 1  
      },
    placeholderTextStyle:{
        fontSize:16,
        color:'grey',
        textAlign:'center'
    },
    textStyleLarge:{
        fontSize:18,
        color:'black'
    },
    textStyleMedium:{
        fontSize:16,
        color:'black',
        margin:10
    },
    textStyleSmall:{
        fontSize:14,
        color:'black'
    }, 
    textInputStyle:{
        borderWidth:1,
        borderRadius:20,
        borderColor:'grey',
        padding:10,
        margin:10,
        color:'black',
        backgroundColor:'white'
    },
      bottomView: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 0, 
      },
      cardStyle:{
        
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            margin:10
      },
      formViewStyle:{
        flexDirection:'row', 
        justifyContent:'flex-start'
    },

    buttonStyle:{
        width:'100%',
        color:'white',
        backgroundColor: '#EE5407',
        textAlign:'center',
        fontSize:18,
        padding:10,
        margin:10,
        borderRadius:10
    }
})

export default styles