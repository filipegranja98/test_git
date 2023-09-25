import { Flex } from "@chakra-ui/react"
import NavLink from "./NavLink"

const NavMenu= ({direction}) =>{
    return(
        <Flex gap='5rem' flexDir={direction}>
            <NavLink href="/" text="Home"/>
            <NavLink href="/" text="Sobre"/>
            <NavLink href="/" text="Ajuda"/>
            <NavLink href="/" text="Carrinho"/>
            <NavLink href="/" text="Ebooks"/>
        </Flex>
    )
}

export default NavMenu