import { useState,useRef,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export const HomeScreen = ({route, navigation}) =>{
    return (
        <ScrollView style={StyleSheet.container}>
            <Text>說明</Text>
            <TouchableOpacity key={0} onPress={()=>navigation.navigate("M1061009")}>M1061009</TouchableOpacity>
            <TouchableOpacity key={1} onPress={()=>navigation.navigate("M1061105")}>M1061105</TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex:1
    }
});