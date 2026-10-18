import { Heading, Text } from "@chakra-ui/react";

export default function AboutMeText() {
    return (
        <>
            <Heading 
            as={"h2"} 
            size={"3xl"}
            >
                Hola, soy Kevyn Vizcaya
            </Heading>
            <Text 
            fontSize={"lg"} 
            mt={"2"}
            >
                Soy Desarrollador de Software, y me especializo en el despliegue de aplicaciones Web y Móviles (Android).
            </Text>
            {/* mt: márgen superior */}
        </>
    )
}