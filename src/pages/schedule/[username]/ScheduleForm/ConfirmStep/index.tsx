import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, FormActions, FormHeader } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Name</Text>
        <TextInput crossOrigin="" placeholder="Your name" />
      </label>

      <label>
        <Text size="sm">Email</Text>
        <TextInput
          crossOrigin=""
          type="email"
          placeholder="johndoe@example.com"
        />
      </label>

      <label>
        <Text size="sm">Observations</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </FormActions>
    </ConfirmForm>
  )
}
