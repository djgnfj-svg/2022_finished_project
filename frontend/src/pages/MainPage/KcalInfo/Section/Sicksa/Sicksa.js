import React from 'react'
import './Sicksa.css'

function Sicksa({ i, meals}) {
    return (
        <div className='sicksa_Card'>
            <div className='card'>
                <span style={{ fontSize: "38px" }}>☃️</span>
                <h2>{i+1}&nbsp; Sicksa</h2>
            </div>
            <div className='card_kcal'>
                <div>
                    <div style={{width:"50px"}}>단백질</div>
                    <h2 style={{width:"40px"}}>{meals.protein}g</h2>
                </div>
                <div>
                    <div style={{width:"70px"}}>탄수화물</div>
                    <h2 style={{width:"59px"}}>{meals.carbohydrate}g</h2>
                </div>
                <div>
                    <div style={{width:"35px"}}>지방</div>
                    <h2 style={{width:"31px"}}>{meals.fat}g</h2>

                </div>
                <div>
                    <div style={{width:"98px"}}>총 칼로리</div>
                    <h2 style={{width:"76px"}}>{meals.kilo_calorie}kcal</h2>
                </div>
            </div>
        </div>
    )
}

export default Sicksa
