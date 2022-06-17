import { useState,useRef,useEffect } from "react";
import { StyleSheet,Image, ScrollView, Button, View} from 'react-native';
import { Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query';
import ICON from 'react-native-vector-icons/FontAwesome';
import MaterialICON from 'react-native-vector-icons/MaterialCommunityIcons';

export const M1061105Screen = ({route, navigation}) =>{

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <ScrollView style={styles.container}>
            <View style={{width:'90vw',alignSelf:'center'}}>
                <View style={styles.circle}/>
                <View style={[styles.header,{flexDirection:(isNotSmallerScreen) ? 'row':'column'}]}>
                    <View style={{alignItems:'flex-start',marginTop:(isNotSmallerScreen) ? '0':16}}>
                        <Text fontSize="4xl" fontWeight="semibold">HELLO，我是</Text>
                        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>劉懿霈</Text>
                        <Text color={"gray" } flexWrap='wrap'>12312312312312312312312322123212312</Text>
                    </View>
                    <Image  style={[styles.img,{marginTop:(isNotSmallerScreen) ? '0':12,marginBottom:(isNotSmallerScreen) ? '0':12}]} source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg' }}/>
                </View>
                <View style={[styles.social,{marginRight:(isNotSmallerScreen) ? '20%':'0',marginLeft:(isNotSmallerScreen) ? '30%':'0'}]}>
                    <ICON name="github" size={50} href="https://github.com/kitakita8879" target="_blank"/>
                    <MaterialICON name="pinterest" size={50} href="https://www.pinterest.com/kitakita8879/_saved/" target="_blank"/>
                    <ICON name="twitter" size={50} href="https://twitter.com/euncucudin" target="_blank"/>
                </View>
                <View style={[{flexDirection:(isNotSmallerScreen) ? 'row':'column',justifyContent:'center'}]}>
                    <View style={styles.profile}>
                        <Text fontSize="2xl" color="gray.400">彰化師範大學</Text>
                        <Text fontSize="2xl" color="gray.400">數位內容科技與管理所</Text>
                    </View>
                    <View style={styles.profile}>
                        <Text fontWeight="bold" fontSize="2xl">曾經製作的專案有android app、web、unity</Text>
                        <View style={{flexDirection:(isNotSmallerScreen) ? "row" : "column", marginTop:'8' }}>
                            <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg:"blue.200"}}>
                                <ICON color="black" padding="4" name="android" size={50} />
                                <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                    Android App
                                </Text>
                            </Flex>
                            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="teal.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.200", }}>
                                <MaterialICON color="black"  padding="4" name="language-html5"  size={50} />
                                <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                    Web Apps
                                </Text>
                            </Flex>
                            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="green.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.200", }}>
                                <MaterialICON color="black"  padding="4" name="unity"  size={50} />
                                <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                    Unity Games
                                </Text>
                            </Flex>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex:1,
    },
    circle: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        backgroundColor: "blue",
        opacity: 0.1,
        alignSelf: "flex-end",
    },
    header:{
        justifyContent:'space-evenly',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:-240,
    },
    img:{
        justifyContent:'center',
        borderRadius:300 / 2,
        backgroundColor:"transparent",
        shadowRadius:1,
        height: 300,
        width: 300,
        alignSelf:'center'
    },
    social:{
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    profile:{
        alignSelf:'center',
        paddingHorizontal:32,
        paddingVertical:16,

    },
    square:{
        flexDirection:'column',
        borderRadius: 20,
        marginTop:4,
        height:'30vh',
        width:'30vh',
        justifyContent:'flex-end'
    }
});