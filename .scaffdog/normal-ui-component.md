---
name: "ui(normal)"
root: "./components/ui"
output: "**/*"
ignore: []
questions:
  name: "Please enter the name of the component (eg. footer)"
---

<!-- @format -->

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import type { FC } from 'react'

type {{ inputs.name | pascal }}Props = {}

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal }}Props> = () => <></>

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} } from '.'

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: 'components/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
}

export default meta

type Story = StoryObj<typeof {{ inputs.name | pascal }}>

export const Primary: Story = {
  args: {},
}

```
