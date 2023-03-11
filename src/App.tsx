import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { FormCard } from "./Components"

type Props = {}

function App({}: Props) {
  return (
    <ChakraProvider>
      <FormCard />
    </ChakraProvider>
  )
}

export default App
