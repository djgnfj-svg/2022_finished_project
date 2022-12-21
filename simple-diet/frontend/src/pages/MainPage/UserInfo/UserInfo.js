import React from 'react'
import Gender from './Section/Gender/Gender'
import Infobase from './Section/Infobase/Infobase'
import Running from './Section/Running/Running'
import Sicksa from './Section/Sicksa/Sicksa'
import './UserInfo.css'
function UserInfo({submit}) {

  return (
    <div className='userInfo'>
      <div className='기본 정보'>
        <Infobase submit={submit} />
      </div>
      
    </div>
  )
}

export default UserInfo
