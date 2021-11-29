import React from 'react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
}

const Template = (args) => {
  const [checked, setChecked] = React.useState(false)

  return <Checkbox checked={checked} onChange={setChecked} {...args} />
}

export const withLabel = Template.bind({})

withLabel.args = {
  label: 'Check',
}
