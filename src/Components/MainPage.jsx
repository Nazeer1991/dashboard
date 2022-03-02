import React from 'react'
import Header from './Header'
import Main from './Main'
import SideBar from './SideBar'
import SubHeader from './SubHeader'
import './MainPage.css'

const MainPage = () => {
  return (
    <>
    <Header />
    <SubHeader />
    <div className='mainPage'>

    
    <Main />
    </div>
    </>
  )
}

export default MainPage