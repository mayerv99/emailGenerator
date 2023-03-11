import React from "react"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Link,
} from "@chakra-ui/react"

import { ExternalLinkIcon } from "@chakra-ui/icons"

import { Form } from "../"

type Props = {}

function FormCard({}: Props) {
  return (
    <Card w="50%" margin="50px auto" size="md">
      <CardHeader>
        <Heading size="lg">Cadastrar hóspedes</Heading>
      </CardHeader>
      <CardBody>
        <Form />
      </CardBody>
      <CardFooter>
        <Heading size="xs" marginLeft="auto">
          <Link
            marginLeft="auto"
            href="https://github.com/mayerv99"
            color="gray"
            isExternal
          >
            Made by mayerv99 <ExternalLinkIcon mx="2px" marginBottom="4px" />
          </Link>
        </Heading>
      </CardFooter>
    </Card>
  )
}

export default FormCard
