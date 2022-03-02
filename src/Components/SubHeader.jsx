import React from 'react'
import './SubHeader.css'

import MoreVertIcon from '@material-ui/icons/MoreVert';

const SubHeader = () => {
  return (
    <>
    <div className="subHeader">

    <div className='name'>
      <h3>Ashirwad</h3>
      <p> Males | T.Nagar, Chennai</p>
    </div>
    <div className="subRight">
      <ul>
        <li>Market Analysis</li>
        <li>Comp Analysis</li>
        <li>TG Analysis</li>
        <li>Media Plan</li>
        
      </ul>
      <div className='threeDot'>

      <MoreVertIcon style={{color:'blueviolet',position:'relative',right:'25'}} />
      </div>
    </div>
    </div>
    </>
  )
}

export default SubHeader