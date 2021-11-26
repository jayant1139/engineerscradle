import React from 'react'
import { Stack,Button } from "@chakra-ui/react";
import { MdOutlineMailOutline} from "react-icons/md"
import {IoMdContacts} from "react-icons/io"
export default function BottomDiv() {
    return (
        <>
        
<div className="centering-div"> 
<h3>Need more help?</h3>
<Stack direction="row" spacing={4} align="center">
  <Button  leftIcon={<MdOutlineMailOutline />} colorScheme="blue" variant="outline">
    Settings
  </Button>
  <Button leftIcon={<IoMdContacts />} colorScheme="blue" variant="outline">
    Call us
  </Button>
</Stack>   
</div>
        </>
    )
}
