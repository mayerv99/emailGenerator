import React from "react"
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"

import { CloseIcon } from "@chakra-ui/icons"

type CustomInputProps = {
  placeholder?: string
  value: string
  setValue: (e: any) => void
  label: string
  type: string
}

type CustomFormInputProps = {
  handleFormChange: (index: number, value: string) => void
  removeField: (index: number) => void
  name: string
  index: number
  placeholder: string
  value: string
}

export function CustomInput({
  placeholder,
  value,
  setValue,
  label,
  type,
}: CustomInputProps) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
    </FormControl>
  )
}

export function CustomFormInput({
  handleFormChange,
  removeField,
  name,
  index,
  placeholder,
  value,
}: CustomFormInputProps) {
  return (
    <FormControl>
      <FormLabel>Hóspede {index + 1}</FormLabel>
      <InputGroup>
        <Input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleFormChange(index, e.target.value)}
          autoComplete="off"
        />
        {index > 0 && (
          <InputRightElement>
            <Button colorScheme="red" onClick={() => removeField(index)}>
              <CloseIcon />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  )
}
