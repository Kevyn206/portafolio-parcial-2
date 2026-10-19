import { Box, Heading } from "@chakra-ui/react"

export default function Header({
    text
}) {
    
    return (
        <Box 
        bg={"blue.600"} 
        p={"5"} 
        pt={"10"} 
        color={"white"}
        borderBottomWidth={"2px"} 
        borderColor={"blue.border"}
        >
            <Heading 
            as={"h1"}
            size={"4xl"}
            >
                {text}
            </Heading>
        </Box>
    )
}