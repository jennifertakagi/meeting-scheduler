import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Form, Header } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Meeting Scheduler!</Heading>
        <Text>
          We need some information to create your profile! Ah, you can edit this
          information later.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Username</Text>
          <TextInput
            crossOrigin=""
            prefix="ignite.com/"
            placeholder="username"
          />
        </label>

        <label>
          <Text size="sm">Name</Text>
          <TextInput crossOrigin="" placeholder="Name" />
        </label>

        <Button type="submit">
          Next
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
