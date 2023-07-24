import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@celoco-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    'data-state': 'checked',
  },
  argTypes: {
    disabled: {
      control: {
        options: ['checked', 'unchecked'],
        control: {
          type: 'inline-radio',
        },
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          aria-label="checkbox"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
