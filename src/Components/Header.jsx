import React from 'react'
import "./Header.css"
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

const Header = () => {
  return (
    <>
    <div className="wrapper__header">
          <div className="left">
            
            <span className='logo'>LOGO</span>
              <nav>
                <ul>
                  <li><a href="#">Anayze</a></li>
                  <li><a href="#">Campaign Manager</a></li>
                  <li><a href="#">CRM</a></li>
               </ul> 
            </nav>
          </div>     
        
           <div className='right'>
            <NotificationsNoneSharpIcon  className='notification' style={{position:'relative',right:'30'}}/>
            <ForumOutlinedIcon style={{position:'relative',right:'15'}} />
           </div>
        
  </div>
    </>
  )
}

export default Header