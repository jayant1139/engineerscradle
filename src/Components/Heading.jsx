import React from "react";
import { Box,Input } from "@chakra-ui/react";
import { Center} from "@chakra-ui/react"
export default function Heading() {
  // const boxstyle={
  //   background="url(engineerscradle\public\bg_img.png)"
  // }
  return (
    <>
    <Center >
      <Box   w="100%" height="10rem"  p={0} color="white">
        <div className="text">
          <div className="childflex">
          <h1>Frequently Asked Questions</h1>
          </div>
          <Input variant="filled"   _placeholder={{ color: '#a3abb8', fontWeight:'bold' }} placeholder="What are you looking for?" w="75%" />

          </div>
        
   </Box>
   </Center>
    </>
  );
}
