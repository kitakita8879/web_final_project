import { useState,useRef,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export const HomeScreen = ({route, navigation}) =>{
    return (
        <ScrollView style={StyleSheet.container}>
            <Text>HOME</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex:1
    }
});