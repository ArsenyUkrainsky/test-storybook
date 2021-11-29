import React, { useState } from 'react'

import { Input } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['small', 'med', 'large'],
      control: { type: 'radio' },
    },
    mW: {
      control: { type: 'range', min: 220, max: 600, step: 20, default: 0 }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '45px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => {
  const [newValue, setNewValue] = useState('')
  return <Input value={newValue} handleChange={(e) => setNewValue(e.target.value)} {...args} />
}

export const MyInput = Template.bind({})
MyInput.args = {
  placeholder: 'Введите текст',
  label: 'My Input',
  disabled: false,
}

export const Small = Template.bind({})
Small.args = {
  placeholder: 'Введите текст',
  label: 'My Input',
  disabled: false,
  size: 'small',
}

export const Med = Template.bind({})
Med.args = {
  placeholder: 'Введите текст',
  label: 'My Input',
  disabled: false,
  size: 'med',
}

export const Large = Template.bind({})
Large.args = {
  placeholder: 'Введите текст',
  label: 'My Input',
  disabled: false,
  size: 'large',
}
