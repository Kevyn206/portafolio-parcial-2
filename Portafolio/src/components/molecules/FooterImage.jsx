import { Image, Text, VStack } from "@chakra-ui/react";

export default function FooterImage({
    text,
    image,
    alt = ""
}) {
    
    return (
        <VStack justify={"center"}>
            <Text size={"md"} fontWeight={"bold"} letterSpacing={"wider"}>{text}</Text>
            <Image src={image} height={"30px"} alt={alt}/>
        </VStack>
    )
}