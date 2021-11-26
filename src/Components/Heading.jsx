import React from "react";
import { Box,Input } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react"
export default function Heading() {
  // const boxstyle={
  //   background="url(engineerscradle\public\bg_img.png)"
  // }
  return (
    <>
    <Center >
      <Box   w="90%" height="10rem"  p={4} color="white">
        <div className="text">
          <div className="childflex">
          <h1>Frequently Asked Questions</h1>
          </div>
          <Input color="white"  _placeholder={{ color: 'white' }} placeholder="What are you looking for?" w="75%" />

          </div>
        
   </Box>
   </Center>
    </>
  );
}
