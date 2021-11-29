import React, { useState } from 'react'
import './FilterCheckbox.css'

const FilterCheckbox = ({ label, color, onHandleChangeFilter }) => {
  const [value, setValue] = useState(false)
  const handleFilter = () => {
    setValue(!value)
    onHandleChangeFilter(value)
  }

  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__text'>{label}</p>
      <input
        checked={value}
        onChange={handleFilter}
        className='filter-checkbox__checkbox'
        id={`filter-checkbox__new`}
        type='checkbox'
      />
      <label className='filter-checkbox__label' htmlFor={`filter-checkbox__new`}>
        <span className={`filter-checkbox__button`} style={(value && !!color) ? { background: color } : {}} />
      </label>
    </div>
  )
}

export default FilterCheckbox
