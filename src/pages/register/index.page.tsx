import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/router'

import { Container, Form, Header, FormError } from './styles'
import { useEffect } from 'react'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must have at least 3 letters.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username must have at least 3 letters.',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'Name must have at least 3 letters.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

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

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Username</Text>
          <TextInput
            crossOrigin=""
            prefix="ignite.com/"
            placeholder="username"
            {...register('username')}
          />

          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size="sm">Name</Text>
          <TextInput crossOrigin="" placeholder="Name" {...register('name')} />

          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Next
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
