import React, { useState } from 'react'

import { Input } from './Input'

export default {
  title: 'Components/Input',
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
export const MyInputSmall = Template.bind({})
MyInputSmall.args = {
  placeholder: 'Введите текст',
  label: 'My Input',
  disabled: false,
  size: 'small'
}
export const MyInputMed = Template.bind({})
MyInputMed.args = {
  placeholder: 'Введите текст',
  label: 'My Input',
  disabled: false,
  size: 'med'
}