import React from 'react'

const Checkbox = ({ value, label, onChange, checked, id, disabled, children, ...props }) => {
  return (
    <label htmlFor={id}>
      <input
        type='checkbox'
        onChange={() => {
          onChange?.(!checked, value)
        }}
        id={id}
        checked={checked}
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}

export default React.memo(Checkbox)
