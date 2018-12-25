import React from 'react';
import {Text,View,Button,Alert} from 'react-native';

const Header = (props) => {

    const {textStyle,viewStyle} = styles;

    return(
        <View style={viewStyle} >
         <Text style={textStyle} >{props.headerText}</Text>
        </View> 
    );
}

const styles ={
    textStyle:{
        fontSize:20,
        color:'red'
    },
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        padding:15,
        shadowColor:'#000',
        shadowOffset:{ width:0, height:2 },
        shadowOpacity:0.9,
        elevation:2,
        position:'relative'
    }
}

export default Header;