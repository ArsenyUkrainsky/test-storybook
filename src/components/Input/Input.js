import './input.css'
import React from 'react'

export const Input = ({ size, value, placeholder, label, handleChange, disabled, mW }) => {
  return (
    <label>
      <span>{label}</span>
        <input className={size ? `input input_${size}` : 'input'} value={value} onChange={handleChange} placeholder={placeholder} disabled={disabled} style={mW && {maxWidth: `${mW}px`}}/>
    </label>
  )
}
