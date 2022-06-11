import { useState,useRef,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export const M1061105Screen = ({route, navigation}) =>{
    return (
        <ScrollView style={StyleSheet.container}>
            <Text>M1061105</Text>
            <Button title="Go Home" onPress={()=>navigation.navigate("Home")}></Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex:1
    }
});