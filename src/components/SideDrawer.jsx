import React from 'react'
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Sidenav from './Sidenav'

const SideDrawer = ({isOpen, onClose}) => {



  return (
    <>
   
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose} >
       
      
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
               <Sidenav/>

          <DrawerBody>
        
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )

}

export default SideDrawer