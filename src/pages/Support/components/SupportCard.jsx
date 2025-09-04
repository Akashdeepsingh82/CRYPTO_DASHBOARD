
import { Flex ,Stack,Icon, HStack, Textarea, Button} from '@chakra-ui/react'
import React from 'react';
import {IoMdMail} from "react-icons/io";
import { Text,Card,FormControl,Input,FormLabel,Checkbox,Box } from '@chakra-ui/react';
//import { Text } from '@chakra-ui/react';

const SupportCard = ({leftComponent,icon,title,text}) => {

  return (
 <Flex gap={6} flexDir={{
base:"column",
xl:"row",
 }}>
    <Stack maxW ="24rem" >
        <Icon as={icon} boxSize={6} color = "p.purple"/>
        <Text  fontWeight="medium"as="h1" textStyle="h1">
            {title}
            </Text>
             <Text fontSize="sm" color="black.60" >{text}</Text>
    </Stack>
    <Box maxW="550px" w="full">{leftComponent}</Box>
   
 </Flex>
  )
}

export default SupportCard