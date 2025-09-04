import { Flex ,Stack,Icon, HStack, Textarea, Button} from '@chakra-ui/react'
import React from 'react';
import {IoMdMail} from "react-icons/io";
import { Text,Card,FormControl,Input,FormLabel,Checkbox,Box } from '@chakra-ui/react';

const ContactCard = () => {
  return (
  <Card p="6" borderRadius="1rem" flexFlow={1}>
          <Stack spacing={6}>
          <Text fontWeight = "medium" fontSize="sm">
              You will receive response within 24 hours of time of submit.
          </Text>
          <HStack
           flexDir={{
       base:"column",
        xl:"row",
   }}>
             <FormControl>
    <FormLabel>Name</FormLabel>
    <Input placeholder='Enter your Name...' />
  </FormControl> 
  
      <FormControl>
    <FormLabel>Surename</FormLabel>
    <Input placeholder='Enter your Surename...'/>
  </FormControl> 
  
          </HStack>
              <FormControl>
    <FormLabel>Email</FormLabel>
    <Input placeholder='Enter your Email...' />
  </FormControl> 
      <FormControl>
    <FormLabel>Message</FormLabel>
    <Textarea placeholder='Enter your Message...' />
  </FormControl> 
  
  <Checkbox defaultChecked>
      <Text fontSize="xs">
      I agree with
      <Box as="span" color="p.purple">
        {" "}
        Terms & Conditions
      </Box>
      </Text>
  </Checkbox>
  <Stack>
      
      <Button fontSize="sm">
          Send a Message
      </Button>
      <Button fontSize="sm"colorScheme="gray">
          Book a Message
      </Button>
  </Stack>
  </Stack>
  
      </Card>
  )
}

export default ContactCard;