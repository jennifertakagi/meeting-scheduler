import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './syles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedId = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo
        title="Connect with Google Calendar  | Meeting Scheduler"
        noindex
      />

      <Container>
        <Header>
          <Heading as="strong">Connect with Google Calendar!</Heading>
          <Text>
            Connect your calendar to automatically check the time busy schedules
            and new events as they are scheduled.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedId ? (
              <Button size="sm" disabled>
                Connected
                <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleConnectCalendar}
              >
                Connect
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Failed to connect to Google, make sure you have enabled the Google
              Calendar access permissions
            </AuthError>
          )}

          <Button
            type="submit"
            disabled={!isSignedId}
            onClick={handleNavigateToNextStep}
          >
            Next
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
