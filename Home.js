import { useState,useRef,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


export const HomeScreen = ({route, navigation}) =>{
    return (
        <View style={styles.container}>
            <Text style={{fontSize:18,margin:20}}>ABOUT US</Text>
            <View style={styles.item}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("M1061009")}>
                    <MaterialIcon name="face-man-shimmer" size={120}/>
                    <Text style={{fontSize:24}}>M1061009陳加齊</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("M1061105")}>
                    <MaterialIcon name="face-woman-shimmer" size={120}/>
                    <Text style={{fontSize:24}}>M1061105劉懿霈</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    item: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    btn:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#ffefd4",
        width:350,
        height:200,
        margin:20,
        borderRadius: 5,
        borderWidth:2,
        borderColor:"#f5ba56"
    }
});