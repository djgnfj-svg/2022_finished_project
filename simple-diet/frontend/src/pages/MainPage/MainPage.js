import React, { useEffect, useState } from 'react'
import HeroContent from '../HeroContent/HeroContent'
import Hero from './Hero/Hero'
import KcalInfo from './KcalInfo/KcalInfo'
import './MainPage.css'
import UserInfo from './UserInfo/UserInfo'

function MainPage() {

  const [userInfo, setUserInfo] = useState('')
  const [booleanCheck, setBooleanCheck] = useState(false)

  const handleSubmitInfo = (info) => {
    setUserInfo(info)
  }

  const handleBackInput = () => {
    setBooleanCheck(false)
    setUserInfo('')
  }

  useEffect(() => {
    if (userInfo !== '') {
      setBooleanCheck(true)
    } else {
      setBooleanCheck(false)
    }
  }, [userInfo])


  return (
    <div style={{marginTop:"50px"}}>
      {booleanCheck ? (
        <div style={{position:"relative"}}>
          <div className='user_Content'>
            <KcalInfo info={userInfo} />
          </div>
          <button className='backInput_Btn' onClick={() => handleBackInput()}>뒤로가기</button>
        </div>
      ) :
        <div style={{display:"flex" , flexDirection:"row" , paddingLeft:"7rem" , width:"100%"}}>
          <div className='hero_Content' style={{width:"60%" , minWidth:"0"}}>
            <HeroContent />
          </div>
          <div className='user_Content'>
            <UserInfo submit={handleSubmitInfo} />
          </div>
        </div>
      }
    </div>
  )
}

export default MainPage
