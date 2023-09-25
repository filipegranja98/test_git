import {Link,Image} from '@chakra-ui/react'
import BooksImage from '../image/Books-removebg-preview.png';


const Logo =({size}) =>{
    return(
        <Link href='/' display='block' paddingLeft={5}>
            <Image src={BooksImage} alt='Logo' width={size}/>
        </Link>
    )
}

export default Logo;