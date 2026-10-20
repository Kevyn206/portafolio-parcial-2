import { Box, Image } from "@chakra-ui/react";
// Se pueden subir niveles en los archivos con ../../
import FotoPerfil from "../../assets/ProfilePhoto.webp"

export default function ProfilePhoto() {
    
    return (
        <Box // Se pone dentro de una Box para agregarle más propiedades (sombras, borde, etc)
        borderRadius={"full"}
        overflow={"hidden"}
        borderWidth={"2px"}
        borderColor={"blue.500"}
        boxShadow={"md"}
        my={"4"}
        >
            <Image
            src={FotoPerfil}
            alt="Foto de perfil"
            boxSize={{base: "130px", md: "160px"}}
            />
        </Box>
    )
}