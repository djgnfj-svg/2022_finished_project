import React, { useEffect, useState } from 'react'
import './KcalInfo.css'
import Sicksa from './Section/Sicksa/Sicksa'
import TotalData from './Section/TotalData/TotalData'

function KcalInfo({ info }) {

  const [totalKcal , setTotalKcal] = useState(info.total_data);

  const rendering = () => {
    const result = []
    for (let i = 0; i < Object.keys(info.meals).length; i++) {
      result.push(<Sicksa i={i} meals={Object.values(info.meals)[i]} />)
    }
    return result
  }

  return (
    <div>
      <div className='Kcal_Info' style={Object.keys(info.meals).length === 2 ? {} : {}}>
        {rendering()}
      </div>
      <div className='total_data'>
         <TotalData total={totalKcal} />
      </div>
    </div>
  )
}

export default KcalInfo
