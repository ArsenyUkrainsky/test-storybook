import React from 'react'
import FilterCheckbox from './FilterCheckbox'

export default {
  title: 'Components/FilterCheckbox',
  component: FilterCheckbox,
  argTypes: {
    color: { control: 'color' },
    onHandleChangeFilter: { control: { disable: true }, action: 'click', table: { disable: true } },
  },
}

const Template = (args) => {
  return <FilterCheckbox {...args} />
}

export const MyFilterCheckbox = Template.bind({})
MyFilterCheckbox.args = {
  label: 'Фильтр',
}
