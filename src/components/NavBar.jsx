import { HStack, useMediaQuery, Box, Input } from "@chakra-ui/react"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import NavMenuMobile from "./NavMenuMobile";

const NavBar = () =>{
    const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
    return(
        <Box position={"relative"}>
            <HStack bgColor="blue.500" w="full" p="1rem 8 rem" justifyContent="space-between">

            <Logo size="5rem"/>
            <Input placeholder='small size' size='sm' />
            {isLargerThanMD?<NavMenu/>:<NavMenuMobile/>}

        </HStack>
        </Box>
        
    )
}
export default NavBar