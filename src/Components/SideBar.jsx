import React from 'react'
import Option from './Option'
import './SideBar.css'

//icons
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';


const SideBar = () => {
  return (
    <>
    <div className="sideBar">
      <div className="wrapper">
          <div>

          <Option title='Search' Icon={SearchIcon}/>
            <Option title='Account' Icon ={PeopleOutlineIcon}/>
            <Option title='Folder' Icon ={FolderOpenIcon}/>

            </div>
            <div className='set'>
          <Option title='Settings' Icon = {SettingsOutlinedIcon}/>
            </div>

      </div>
      
    </div>
    </>
  )
}

export default SideBar