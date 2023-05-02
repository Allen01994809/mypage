---
name: "shadcn/ui"
root: "./components/ui"
output: "**/*"
ignore: []
questions:
  name: "Please enter the name of the component (eg. accordion)"
---

<!-- @format -->

# `{{ inputs.name | pascal }}/index.tsx`

```tsx

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react'

const Sample = () => (
  // Paste sample here.
)

const meta: Meta<typeof Sample> = {
  title: 'components/{{ inputs.name | pascal }}',
  component: Sample,
}

export default meta

type Story = StoryObj<typeof {{ inputs.name | pascal }}>

export const Primary: Story = {
  args: {},
}

```
