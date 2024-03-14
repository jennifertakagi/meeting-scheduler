import Image from 'next/image'
import { Heading, Text } from '@ignite-ui/react'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import previewImage from '../../assets/app-preview.png'

import { Container, Hero, Preview } from './styles'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Uncomplicated scheduling | Meeting Scheduler"
        description="Connect your calendar and let people book appointments in your free time."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Uncomplicated scheduling
          </Heading>
          <Text size="xl">
            Connect your calendar and let people book appointments in your free
            time.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendar symbolizing running application"
          />
        </Preview>
      </Container>
    </>
  )
}
