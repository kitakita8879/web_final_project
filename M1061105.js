import { useState,useRef,useEffect } from "react";
import { StyleSheet,Image, ScrollView, Button, View} from 'react-native';
import { Flex, Text,VStack, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query';
import ICON from 'react-native-vector-icons/FontAwesome';
import MaterialICON from 'react-native-vector-icons/MaterialCommunityIcons';
import ProjectCard from "./projectCard";
import { projectsList1105 } from "./assets/data";
import Typical from 'react-typical';

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
                        <Typical
                            steps={['就讀於彰師資管數科所', 1500, '對程式、繪畫軟體都稍有接觸', 1000]}
                                loop={Infinity}
                                wrapper="h2"
                            />
                    </View>
                    <Image  style={[styles.img,{marginTop:(isNotSmallerScreen) ? '0':12,marginBottom:(isNotSmallerScreen) ? '0':12}]} source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg' }}/>
                </View>

                <View style={[styles.social,{marginRight:(isNotSmallerScreen) ? '20%':'0',marginLeft:(isNotSmallerScreen) ? '30%':'0'}]}>
                    <ICON name="github" size={50} href="https://github.com/kitakita8879" target="_blank"/>
                    <MaterialICON name="pinterest" size={50} href="https://www.pinterest.com/kitakita8879/_saved/" target="_blank"/>
                    <ICON name="twitter" size={50} href="https://twitter.com/euncucudin" target="_blank"/>
                </View>

                <View style={{width:(isNotSmallerScreen) ? '70vw':'90vw',alignSelf:'center', marginTop:24}}>
                    <View style={styles.edu_app}>
                        <Text fontWeight="bold" fontSize="3xl" align="center" w={(isNotSmallerScreen) ? '70vw':'90vw'} color="cyan.400"><ICON name="star" size={28}/> 學歷</Text>
                        <View style={{flexDirection:(isNotSmallerScreen) ?"row":"column",alignItems:(isNotSmallerScreen) ?"flex-start":"center"}}>
                            <Image style={[styles.img,{width:100,height:100}]} source={{ uri: 'https://rpage.ncue.edu.tw/var/file/0/1000/img/19/LOGO1.jpg' }}/>
                            <Text fontSize="2xl" color="gray.700" justify="center" alignSelf="center" ml={(isNotSmallerScreen) ?'12':'0'}>彰化師範大學資訊管理學系  數位內容科技與管理所</Text>    
                        </View> 
                    </View>
                    
                    <View style={styles.edu_app}>
                        <Text fontWeight="bold" fontSize="3xl" align="center" w={(isNotSmallerScreen) ? '70vw':'90vw'} color="cyan.400"><ICON name="code" size={28}/> 專長</Text>
                        <Flex rounded="xl" borderWidth="1px" borderLeftWidth="5px" direction="row" flexWrap="wrap" mt={8} bg="white" borderColor="gray.100" w={(isNotSmallerScreen) ? '70vw':'90vw'} borderLeftColor="blue.100" justify="flex-start" _hover={{shadow: "lg" }}>
                                
                            <Text color="gray.700" p="4" fontSize="xl" fontWeight="semibold">
                                HTML、CSS、MySQL <br/> Illustration、Maya、Unity
                            </Text>
                        </Flex>
                    </View>
                
                    <Text fontWeight="bold" fontSize="3xl" align="center" w={(isNotSmallerScreen) ? '70vw':'90vw'} color="cyan.400"><ICON name="desktop" size={28}/> 作品</Text>
                    <VStack align="start" spacing={4} >
                        <SimpleGrid columns={1} spacing={16} mt={5} w="100%">
                        {projectsList1105.map((project, index) => (
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
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    edu_app:{
        alignSelf:'flex-start',
        paddingVertical:16,
    },
});