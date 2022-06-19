import { IconButton } from "@chakra-ui/button";
import { useState,useRef,useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Image } from '@chakra-ui/image';
import { Flex, Stack,Circle,VStack,Box, Heading, Spacer,Text  } from "@chakra-ui/layout";
import { StyleSheet,View, TouchableOpacity, ScrollView, Button } from 'react-native';
import MaterialICON from 'react-native-vector-icons/MaterialCommunityIcons';
import ICON from 'react-native-vector-icons/FontAwesome';



export const M1061009Screen = ({route, navigation}) =>{
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <ScrollView style={styles.container}>

            <VStack p={5}>

{/* Heading */}
                <Stack>
                    <Circle position="absolute" bg="blue.100" opacity="0.1"
                         w="310px" h="320px" alignSelf="flex-end" />
                    
                    
                    <Flex direction={isNotSmallerScreen ? "row" : "column"}
                        spacing="200px" p={isNotSmallerScreen ? "0" : "16"}
                        alignSelf="flex-start">
                        <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                            <Text fontSize="4xl" fontWeight="semibold">Hello, 我是</Text>
                            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >陳加齊</Text>
                            <Text color={"gray"}>就讀於彰師資管所，從⼩立志成為電腦工程師</Text>
                       
                        </Box>
                        
                        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                            mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                            backgroundColor="transparent" boxShadow="lg"
                            boxSize="200px" src='https://thumbs2.imgbox.com/a4/bf/fa4MwX7q_t.jpg' />
                    </Flex>
                </Stack>


            <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
                
                {/* Big title*/}

                {/* <Box alignSelf="center" px="32" py="16">
                    <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                        7+
                    </Heading>
                    <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
                </Box> */}

                {/* content*/}

                <Box alignSelf="center" px="32" py="16">
                    <Text fontWeight="bold" fontSize="2xl">Back-End Development and Android APP Development</Text>
                
                {/* icon link */}
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} h="5vh" w="10vh" justify="flex-end">
                        <ICON name="github" size={50} href="https://github.com/jiamax" target="_blank"/>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} h="5vh" w="10vh" justify="flex-end" >
                        <MaterialICON name="pinterest" size={50} href="https://www.pinterest.com/kitakita8879/_saved/" target="_blank"/>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} h="5vh" w="10vh" justify="flex-end" >
                         <ICON name="twitter" size={50} href="https://twitter.com/euncucudin" target="_blank"/>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
            </VStack>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex:1
    },

});