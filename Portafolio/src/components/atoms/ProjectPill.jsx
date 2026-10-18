import { Badge } from "@chakra-ui/react";

export default function ProjectPill({
    text = "Badge"
}) {
    return (
        <Badge 
        colorPalette={"blue"} 
        variant={"subtle"} 
        borderRadius={"full"} 
        px={"2.5"} 
        py={"0.5"}
        >
            {text}
        </Badge>
    )
}