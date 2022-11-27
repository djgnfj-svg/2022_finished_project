import React, { useEffect, useState } from 'react'
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
    <div>
      <div className='hero_Content'>
      </div>
      {booleanCheck ? (
        <>
          <div className='user_Content'>
            <KcalInfo info={userInfo} />
          </div>
          <button onClick={() => handleBackInput()}>뒤로가기</button>
        </>
      ) :
        <div className='user_Content'>
          <UserInfo submit={handleSubmitInfo} />
        </div>
      }
    </div>
  )
}

export default MainPage
