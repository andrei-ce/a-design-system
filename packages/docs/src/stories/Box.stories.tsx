import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Box element text example: Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor dicta, vitae laudantium nulla in non blanditiis
        possimus neque corporis! Corporis nisi nobis, laboriosam reprehenderit
        consequuntur libero numquam facilis deserunt ex!
      </Text>
    ),
  },
  // this here is because we don't want to control this property,
  // as it would appear as React Element
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
