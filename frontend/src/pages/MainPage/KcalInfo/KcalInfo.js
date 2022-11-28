import React, { useEffect, useState } from 'react'
import './KcalInfo.css'
import Sicksa from './Section/Sicksa/Sicksa'

function KcalInfo({ info }) {

  const [kcalInfo, setKcalInfo] = useState('as')

  useEffect(() => {
    if (info !== 'as') {
      setKcalInfo(info.meals)
    }
  }, [info])

  const rendering = () => {
    const result = []
    for (let i = 0; i < Object.keys(info.meals).length; i++) {
      result.push(<Sicksa i={i} meals={Object.values(info.meals)[i]} />)
    }
    return result
  }

  return (
    <div>
      <div className='Kcal_Info'>
        {/** 
         * 1. meals 만큼 map으로 식사 카드 생성
         * 2. 식사카드에 meals.{index+1}meals 전송
         */}
        {rendering()}
      </div>
      <div>
      </div>
    </div>
  )
}

export default KcalInfo
