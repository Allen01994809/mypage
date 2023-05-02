---
name: "page"
root: "./app/"
output: "**/*"
ignore: []
questions:
  path: "Please enter the path to the page. (eg. about/company)"
  name: "Please enter the page component name. (eg. AboutCompany)"
---

<!-- @format -->

# `{{ inputs.path }}/page.tsx`

<!-- Page Container / Routing -->

```tsx
import { get{{ inputs.name | pascal }} } from './dependency'
import { {{ inputs.name | pascal }}PageView } from './view'

export default async function {{ inputs.name | pascal }}Page() {
  const { {{ inputs.name | camel }} } = await get{{ inputs.name | pascal }}()

  return <{{ inputs.name | pascal }}PageView {{ inputs.name | camel }}={ {{- inputs.name | camel -}} } />
}

```

# `{{ inputs.path }}/view.tsx`

<!-- Page Presenter -->

```tsx
import type { FC } from 'react'

import type { get{{ inputs.name | pascal }} } from './dependency'

type {{ inputs.name | pascal }} = Awaited<ReturnType<typeof get{{ inputs.name | pascal }}>>

type PageViewProps = {
  {{ inputs.name | camel }}: {{ inputs.name | pascal }}
}

export const {{ inputs.name | pascal }}PageView: FC<PageViewProps> = ({ {{ inputs.name | camel }} }) => (
  <div>
    <p>{ {{- inputs.name | camel -}}.name}</p>
  </div>
)

```

# `{{ inputs.path }}/page.stories.tsx`

<!-- Page Storybook -->

```tsx
import RootLayout from '@/app/layout'
import type { Meta, StoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }}PageView } from './view'

const meta: Meta<typeof {{ inputs.name | pascal }}PageView> = {
  title: 'pages/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }}PageView,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof {{ inputs.name | pascal }}PageView>

export const Default: Story = {
  args: {},
}

```

# `{{ inputs.path }}/dependency.ts`

```ts
export const get{{ inputs.name | pascal }} = async () =>
  fetch('/api/{{ inputs.name | camel }}').then((res) => res.json())

```
