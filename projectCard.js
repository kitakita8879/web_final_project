import { useState,useRef,useEffect } from "react";
import { Stack,VStack,HStack,Text,useColorModeValue,Tag,Link } from "@chakra-ui/react";
import { motion} from "framer-motion";
import { Image } from "react-native";
import { useMediaQuery } from '@chakra-ui/media-query';

const ProjectCard = ({key,title,description,logo,link,technologies}) => {
    const textColor = useColorModeValue("gray.500", "gray.200");
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)"); 

    return (
      
      <motion.div layout >
        <Text as={Link} href={link} fontWeight="bold" fontSize="xl" noOfLines={1}>{title}</Text>
        <Stack
          direction={(isNotSmallerScreen) ? 'row':'column'}
          p={4}
          bg={useColorModeValue("white", "gray.800")}
          rounded="xl"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.100", "gray.700")}
          w="100%"
          h="100%"
          textAlign="left"
          align="start"
          spacing={4}
          cursor="pointer"
          _hover={{ shadow: "lg" }}
        >
          <Image  style={[{width:(isNotSmallerScreen)?'30vw':'80vw',height:'30vh', borderRadius:2,resizeMode: 'contain'}]} source={logo}/>
          <VStack align="start" justify="flex-start">
            <VStack spacing={0} align="start">
                <motion.div layout >
                    <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>{description}</Text>
                </motion.div>
  
              <motion.div layout>
                  <HStack spacing="1">
                    {technologies.map(tech => (
                      <Tag size="sm" colorScheme={"gray"}>{tech}</Tag>
                    ))}
                  </HStack>
              </motion.div>
            </VStack>
          </VStack>
        </Stack>
      </motion.div>
    );
  };
  
  export default ProjectCard;