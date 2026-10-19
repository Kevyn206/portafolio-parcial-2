import { Field, Input, Textarea } from "@chakra-ui/react";

export default function TextField({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    error,
    isTextarea = false,
    rows = 4
}) {

    return (

        // invalid={!!error} activa el color rojo de Chakra si hay error
        <Field.Root required invalid={!!error}>
            <Field.Label>
                {label}
                <Field.RequiredIndicator/>
            </Field.Label>
            
            {isTextarea ? (
                <Textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                variant="outline"
                />

            ) : (
                <Input
                type={type}
                name={name}    // <== Campos que recibirá onChange
                value={value}  // <== para insertar en el map de errores
                onChange={onChange}
                placeholder={placeholder} 
                variant={"flushed"}
                />
            )}

            {/* Si hay algún error (error &&), pintar con Field.ErrorText */}
            {error && <Field.ErrorText>{error}</Field.ErrorText>}
        </Field.Root>
    )
}