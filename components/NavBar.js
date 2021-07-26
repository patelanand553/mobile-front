import { Box, HStack } from "@chakra-ui/layout";
import Container from "./Container";
import { GoThreeBars } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, Input, Modal, ModalContent, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Navbar = (props) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <Box
                py="2"
                boxShadow="sm"
                border="0 solid #e5e7eb"
                position="fixed"
                top="0"
                bg="#fff"
                width="100%"
                zIndex="1"
            >
                <Container>
                    <HStack spacing={4} px={3}>
                        {/* <Icon as={GoThreeBars} w={6} h={6} /> */}
                        <MenuDrawer />

                        <Text fontSize={["md", "xl", "3xl"]} fontWeight="semibold" >Anand's Website</Text>
                        <Input
                            maxW={{ md: "15rem", lg: "20rem" }}
                            placeholder="search.."
                            borderColor="#b5bdc4"
                            borderRadius="5px"
                            d={{ base: "none", md: "block" }}
                            style={{
                                marginLeft: "1rem"
                            }}
                        />

                        <HStack spacing={2} style={{ marginLeft: "auto" }}>
                            {/* <Icon as={BiSearch} w={6} h={6} d={["block", "block", 'none']} /> */}
                            <Button onClick={onOpen} variant="unstyled" borderRadius="50%" size="sm"
                                
                            >
                                <Icon as={BiSearch} w={6} h={6} d={["block", "block", 'none']} mx="auto" />
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent width="max-content" >
                                    <Input
                                        // maxW={{ md: "15rem", lg: "20rem" }}
                                        width="200px"
                                        placeholder="search.."
                                        borderColor="#b5bdc4"
                                        borderRadius="5px"
                                        d="block"
                                       
                                    />
                                </ModalContent>
                            </Modal>
                            {/* <Avatar name="Dan Abrahmov" size="sm" src="https://bit.ly/dan-abramov" /> */}
                            <UserProfile />
                        </HStack>
                    </HStack>

                </Container>
            </Box>

        </>
    )
}

const MenuDrawer = (props) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const btnref = React.useRef();
    return (
        <>
            <Button ref={btnref} onClick={onOpen} variant="unstyled"  >
                <Icon as={GoThreeBars} w={6} h={6} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnref}
                size="xs"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Anand's website</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={2} alignItems="flex-start" >
                            <Text>Company</Text>
                            <Text>Mobile</Text>
                            <Text>Tablet</Text>
                            <Text>Laptop</Text>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        made with love
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


const UserProfile = (props) => {
    return (
        <Popover trigger="hover" >
            <PopoverTrigger>
                <Avatar name="Dan Abrahmov" size="sm" src="https://bit.ly/dan-abramov" cursor="pointer" />
            </PopoverTrigger>
            <PopoverContent width="max-content" >
                <PopoverHeader fontWeight="semibold">
                    Hello, Anand Patel
                </PopoverHeader>
                <PopoverArrow />
                {/* <PopoverCloseButton /> */}
                <PopoverBody d="flex" gridGap={2} flexDir="column" >
                    <Text cursor="pointer">profile</Text>
                    <Text cursor="pointer">add new Mobile</Text>
                    <Text cursor="pointer">dummy</Text>
                    <Text cursor="pointer"> dummy</Text>
                    <Text cursor="pointer">log out</Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}



export default Navbar;