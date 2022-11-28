import React from 'react'
import './Sicksa.css'

function Sicksa({ i, meals}) {
    return (
        <div className='sicksa_Card'>
            <div className='card'>
                <span style={{ fontSize: "38px" }}>☃️</span>
                <h2>{i+1}&nbsp; Sicksa</h2>
            </div>
            <div className='card_sub'>오전 11~2시 식사를 추천해요 !</div>
            <div className='card_kcal'>
                <div>
                    <div>단백질</div>
                    <h2>{meals.protein}g</h2>
                </div>
                <div>
                    <div>탄수화물</div>
                    <h2>{meals.carbohydrate}g</h2>
                </div>
                <div>
                    <div>지방</div>
                    <h2>{meals.fat}g</h2>

                </div>
                <div>
                    <div>총 칼로리</div>
                    <h2>{meals.kilo_calorie}kcal</h2>
                </div>
            </div>
        </div>
    )
}

export default Sicksa
