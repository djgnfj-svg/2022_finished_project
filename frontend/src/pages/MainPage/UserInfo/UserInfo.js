import React from 'react'
import Gender from './Section/Gender/Gender'
import Infobase from './Section/Infobase/Infobase'
import Running from './Section/Running/Running'
import Sicksa from './Section/Sicksa/Sicksa'
import './UserInfo.css'
function UserInfo() {

  return (
    <div className='userInfo'>
      <div className='기본 정보'>
        <Infobase />
      </div>
      <div className='성별'>
        <Gender />
      </div>
      <div className='운동' style={{ display: "flex", flexDirection: "row" }}>
        <Running />
      </div>
      <div className='식사횟수'>
        <Sicksa />
      </div>
      <div className='info_Submit'>
        <button>확인하기</button>
      </div>
    </div>
  )
}

export default UserInfo
