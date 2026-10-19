import { Flex } from "@chakra-ui/react";
import ProfilePhoto from "../atoms/ProfilePhoto";
import AboutMeText from "../molecules/AboutMeText";


export default function AboutMeSection() {

    return (
        // Flex ayuda a alinear el contenido para la presentación
        <Flex direction={"column"} align={"center"} textAlign={"center"}>

        <ProfilePhoto/>
        <AboutMeText/>

        </Flex>
    )
}