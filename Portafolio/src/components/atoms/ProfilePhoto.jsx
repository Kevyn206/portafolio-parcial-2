import { Box, Image } from "@chakra-ui/react";
// Se pueden subir niveles en los archivos con ../../
import FotoPerfil from "../../assets/ProfilePhoto.webp"

function ProfilePhoto() {
    
    return (
        <Box
        boxSize={{base: "130px", md: "160px"}}
        borderRadius={"full"}
        overflow={"hidden"}
        borderWidth={"2px"}
        borderColor={"blue.500"}
        boxShadow={"md"}
        mb={"4"}
        >
            <Image
            src={FotoPerfil}
            alt="Foto de perfil"
            width={"100%"}
            height={"100%"} // <= width y height ajustan la foto para que quede centrada
            objectFit={"cover"}
            />
        
        </Box>
    )
}

export default ProfilePhoto;