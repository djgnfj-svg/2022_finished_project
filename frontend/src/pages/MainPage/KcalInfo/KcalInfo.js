import React from 'react'
import './KcalInfo.css'
import Sicksa from './Section/Sicksa/Sicksa'

function KcalInfo({ info }) {
  return (
    <div>
      <div className='Kcal_Info'>
        {/** 
         * 1. meals 만큼 map으로 식사 카드 생성
         * 2. 식사카드에 meals.{index+1}meals 전송
         */}
        <Sicksa />
        <Sicksa />
        <Sicksa />
      </div>
      <div>
      </div>
    </div>
  )
}

export default KcalInfo
