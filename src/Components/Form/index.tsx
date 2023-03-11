import {
  Box,
  Button,
  VStack,
  HStack,
  Divider,
  CircularProgress,
} from "@chakra-ui/react"
import React, { useState, FormEvent } from "react"

import { AddIcon } from "@chakra-ui/icons"

import { CustomInput, CustomFormInput } from "../Inputs"
import generateEmailLink from "../../utils/generateEmail"

type Props = {}

function Form({}: Props) {
  const [names, setNames] = useState([""])
  const [apartment, setApartment] = useState("")
  const [startAt, setStartAt] = useState("")
  const [endAt, setEndAt] = useState("")

  const handleFormChange = (index: number, value: string) => {
    const lower = value.toLowerCase()
    const arr = lower.split(" ")

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    const newValue = arr.join(" ")

    const newNames = [...names]
    newNames[index] = newValue
    setNames(newNames)
  }

  const addField = () => {
    setNames([...names, ""])
  }

  const removeField = (index: number) => {
    const data = [...names]
    data.splice(index, 1)
    setNames(data)
  }

  const handleSubmit = () => {
    window.open(generateEmailLink({ names, apartment, startAt, endAt }))
  }

  return (
    <Box p={4} margin="0 auto">
      <VStack gap="10px">
        <HStack gap="10px" justifyContent="space-around" w="100%">
          <CustomInput
            placeholder="Apartamento"
            label="Apartamento"
            setValue={setApartment}
            type="text"
            value={apartment}
          />
          <CustomInput
            label="Data de início"
            setValue={setStartAt}
            type="date"
            value={startAt}
          />
          <CustomInput
            label="Data de término"
            setValue={setEndAt}
            type="date"
            value={endAt}
          />
        </HStack>
        <Divider />
        {names.map((name, index) => (
          <CustomFormInput
            handleFormChange={handleFormChange}
            index={index}
            name={`name-${index}`}
            placeholder="Nome do hóspede"
            removeField={removeField}
            value={name}
            key={index}
          />
        ))}
      </VStack>
      <Button
        onClick={addField}
        marginTop={4}
        colorScheme="teal"
        marginRight="auto"
      >
        <AddIcon />
      </Button>
      <VStack>
        <Button w="100%" marginTop={4} onClick={handleSubmit}>
          Gerar email
        </Button>
      </VStack>
    </Box>
  )
}

export default Form
