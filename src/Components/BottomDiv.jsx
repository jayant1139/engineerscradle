import React from 'react'
import { Stack,Button } from "@chakra-ui/react";
import { MdOutlineMailOutline} from "react-icons/md"
import {IoMdContacts} from "react-icons/io"
export default function BottomDiv() {
    return (
        <>
        

<Stack direction="row" spacing={3}>
  <Button leftIcon={<MdOutlineMailOutline />} colorScheme="blue" variant="outline">
    Settings
  </Button>
  <Button leftIcon={<IoMdContacts />} colorScheme="blue" variant="outline">
    Call us
  </Button>
</Stack>   
        </>
    )
}
