import { Heading } from "@chakra-ui/react";

export default function SectionTitle({
    text = "Section Title"
}) {
    
    return (
        <Heading size={"xl"} mb={"4"} textDecor={"underline"} ms={{base: "5", md: "10"}}>{text}</Heading>
    )
}