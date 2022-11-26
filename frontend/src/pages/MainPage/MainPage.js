import React from 'react'
import Hero from './Hero/Hero'
import KcalInfo from './KcalInfo/KcalInfo'
import './MainPage.css'
import UserInfo from './UserInfo/UserInfo'

function MainPage() {
  return (
    <div>
        <div className='hero_Content'>

        </div>
        <div className='user_Content'>
            <UserInfo />
        </div>
        <div className='user_Content'>
            <KcalInfo />
        </div>
    </div>
  )
}

export default MainPage
