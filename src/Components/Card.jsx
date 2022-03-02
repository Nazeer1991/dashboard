import React from 'react'
import './Card.css'

const Card = ({title,number,inst,type}) => {
  return (
      <div className="cardcover">
          <div className='title'>
        <span>{title}</span>
        </div>
        <div className='below'>
            <div className='number'>
            <span>{number}</span>
            </div>
             <div className="side">

                    <p className='liside'>{inst}</p>
                    <p className='liside'>{type}</p>

             </div>
            
                
                
            </div>
        </div>
    

      
    
  )
}

export default Card