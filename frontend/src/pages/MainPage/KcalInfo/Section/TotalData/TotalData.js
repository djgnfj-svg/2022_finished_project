import React from 'react'
import './TotalData.css'

function TotalData({total}) {
  return (
    <>
      <h2>1 Day Total Kcalory</h2>
      <div className='totla_KcalData'>
        <div>
          <div className='total_title'>단백질</div>
          <div className='total_grams'>{total.total_protein} g</div>
        </div>
        <div>
          <div className='total_title'>탄수화물</div>
          <div className='total_grams'>{total.total_carbohydrate} g</div>
        </div>
        <div>
          <div className='total_title'>지방</div>
          <div className='total_grams'>{total.total_fat} g</div>
        </div>
        <div>
          <div className='total_title'>총 칼로리</div>
          <div className='total_grams'>{total.total_kilo_calorie} kcal</div>
        </div>
    </div>
   </>
  )
}

export default TotalData
