import { IconButton } from "@chakra-ui/button";
import { useState,useRef,useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Image } from '@chakra-ui/image';
import { Flex, Stack,Circle,VStack,Box, Heading, Spacer,Text,HStack,SimpleGrid,Grid, GridItem } from "@chakra-ui/layout";
import { StyleSheet,View, TouchableOpacity, ScrollView, Button } from 'react-native';
import MaterialICON from 'react-native-vector-icons/MaterialCommunityIcons';
import ICON from 'react-native-vector-icons/FontAwesome';
import { projectsList1009 } from "./assets/1105data";
import ProjectCard from "./projectCard";



export const M1061009Screen = ({route, navigation}) =>{
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <ScrollView style={styles.container}>

            <VStack p={5}>

{/* Heading */}
                <HStack>

                    <Circle position="absolute" bg="blue.100" opacity="0.1"
                         w="310px" h="320px" alignSelf="flex-end" />
                    
                    
                    <Flex direction={isNotSmallerScreen ? "row" : "column"}
                        spacing="200px" p={isNotSmallerScreen ? "0" : "16"}
                        alignSelf="flex-start">

                        <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                            <Text fontSize="5xl" fontWeight="semibold">Hello, 我是</Text>
                            <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >陳加齊</Text>
                            <Text color={"gray"}>就讀於彰師資管所，從⼩立志成為電腦工程師</Text>
                        </Box>
                        
                        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                            mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                            backgroundColor="transparent" boxShadow="2g"
                            boxSize="250px" src='https://thumbs2.imgbox.com/a4/bf/fa4MwX7q_t.jpg' />
                    </Flex>

            </HStack>

            <HStack>
                {/* <Flex rounded="xl" direction="column" mt={5} ml={isNotSmallerScreen ? 1 : 0} h="10vh" w="10vh" justify="flex-end"> */}
                <ICON name="github" size={50} href="https://github.com/jiamax" target="_blank"/>
                <MaterialICON name="pinterest" size={50} href="https://www.pinterest.com/" target="_blank"/>
                <ICON name="twitter" size={50} href="https://twitter.com/home" target="_blank"/>
                {/* </Flex> */}
            </HStack>




            <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "50vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
                
                {/* Big title*/}



                {/* content*/}

        </Flex>


        <Grid
            templateAreas={`"header header"
                            "nav main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            alignSelf="center"

            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='2' area={'header'}>
            <HStack>
            <ICON name="star" size={25}  target="_blank"/>
            <Heading alignSelf="center" justify="center" fontWeight="bold" color="cyan.500" size="2xl">學歷</Heading>
            </HStack>

            </GridItem>
            
            <GridItem pl='2' area={'main'}>
            <HStack>
            <Image  mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} 
                backgroundColor="transparent" boxShadow="lg"
                boxSize="50px" src='https://rpage.ncue.edu.tw/var/file/0/1000/img/19/LOGO1.jpg' />
            <Text justify="center" alignSelf="center" fontWeight="bold" fontSize="2xl">彰化師範大學資訊管理學系 資訊管理所</Text>
            </HStack>

            </GridItem>
        </Grid>

        
        <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            alignSelf="center"
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='2' area={'header'}>
            <HStack>
            <ICON name="code" size={25}  target="_blank"/>
            <Heading alignSelf="center" justify="center" fontWeight="bold" color="cyan.500" size="2xl">專長</Heading>
            </HStack>

            </GridItem>
            
            <GridItem pl='2' area={'main'}>
            <HStack>
            <Image  mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} 
                backgroundColor="transparent" boxShadow="lg"
                boxSize="50px" src='https://erp.mgt.ncu.edu.tw/wp-content/uploads/2022/02/Python-Logo.png' />
            <Text justify="center" alignSelf="center" fontWeight="bold" fontSize="2xl"> Back-End Python Coding Development</Text>

            </HStack>

            </GridItem>
        </Grid>


        <HStack>
        <ICON name="desktop" size={25}  target="_blank"/>
        <Heading alignSelf="center" justify="center" fontWeight="bold" color="cyan.500" size="2xl">作品</Heading>
        </HStack>

                    <VStack align="center" spacing={4} >
                        <SimpleGrid columns={1} spacing={16} mt={5} w="75%">
                        {projectsList1009.map((project, index) => (
                            <ProjectCard
                                title={project.title}
                                description={project.desc}
                                logo={project.logo}
                                link={project.link}
                                technologies={project.technologies}
                            />
                        ))}
                        </SimpleGrid>
                    </VStack>

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