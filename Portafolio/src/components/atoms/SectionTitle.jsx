import { Heading } from "@chakra-ui/react";

export default function SectionTitle({
    text = "Section Title"
}) {
    
    return (
        <Heading size={"xl"} mb={"4"}>{text}</Heading>
    )
}