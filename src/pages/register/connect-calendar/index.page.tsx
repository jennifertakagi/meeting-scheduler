import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './syles'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  const session = useSession()

  // async function handleRegister() {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your agenda!</Heading>
        <Text>
          Connect your calendar to automatically check the time busy schedules
          and new events as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Next
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
