import { useState,useRef,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button,HStack,VStack } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query';


export const HomeScreen = ({route, navigation}) =>{
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <View style={styles.container}>
            <Text style={{fontSize:18,margin:20}}>ABOUT US</Text>
            <View style={styles.item}>
            <Button rounded="xl" borderWidth="1px" direction="row" flexWrap="wrap" mt={8} bg="white" borderColor="gray.100" borderLeftWidth="5px" borderLeftColor="blue.100" w={(isNotSmallerScreen) ? '30vw':'90vw'} h={(isNotSmallerScreen) ? '50vh':'30vh'}  _hover={{shadow: "lg" }} onClick={()=>navigation.navigate("M1061009")}>
                    <VStack>
                        <HStack spacing="1" >
                            <MaterialIcon name="face-man-shimmer" size={120}/>
                            <VStack direction="column" align='start' flexWrap="wrap" w={(isNotSmallerScreen) ? '20vw':'50vw'} >
                                <Text style={{fontSize:24}}>M1061009 陳加齊</Text>
                                <Text style={{fontSize:16, color:'gray',marginTop:6,flexWrap:"wrap",alignSelf:'flex-start'}}>簡介</Text>
                                
                            </VStack>
                        </HStack>
                        <Text style={{fontSize:8, color:'blue',opacity: 0.3,alignSelf:'flex-end',justifyContent:'flex-end'}}>了解更多
                            <MaterialIcon name="arrow-right" size={20}/>
                        </Text>
                    </VStack>
                </Button>
                <Button rounded="xl" borderWidth="1px" direction="row" flexWrap="wrap" mt={8} bg="white" borderColor="gray.100" borderLeftWidth="5px" borderLeftColor="blue.100" w={(isNotSmallerScreen) ? '30vw':'90vw'} h={(isNotSmallerScreen) ? '50vh':'30vh'}  _hover={{shadow: "lg" }} onClick={()=>navigation.navigate("M1061105")}>
                    <VStack>
                        <HStack spacing="1" >
                            <MaterialIcon name="face-woman-shimmer" size={120}/>
                            <VStack direction="column" align='start' flexWrap="wrap" w={(isNotSmallerScreen) ? '20vw':'50vw'} >
                                <Text style={{fontSize:24}}>M1061105 劉懿霈</Text>
                                <Text style={{fontSize:16, color:'gray',marginTop:6,flexWrap:"wrap",alignSelf:'flex-start'}}>彰師資管數科所<br/>對於程式、繪畫軟體都稍有接觸</Text>
                                
                            </VStack>
                        </HStack>
                        <Text style={{fontSize:8, color:'blue',opacity: 0.3,alignSelf:'flex-end',justifyContent:'flex-end'}}>了解更多
                            <MaterialIcon name="arrow-right" size={20}/>
                        </Text>
                    </VStack>
                </Button>
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
});