import React from 'react'
import './Option.css'

const Option = ({Icon,title}) => {
  return (
      <>
      <div className="option">
        {Icon && <Icon className='icon' />} 
        <h5>{title}</h5>
      </div>
      </>
  )
}

export default Option