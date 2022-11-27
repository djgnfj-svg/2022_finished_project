import React from 'react'
import './Sicksa.css'

function Sicksa() {
    return (
        <div className='sicksa_Card'>
            <div className='card'>
                <span style={{ fontSize: "38px" }}>☃️</span>
                <h2>1&nbsp; Sicksa</h2>
            </div>
            <div className='card_sub'>오전 11~2시 식사를 추천해요 !</div>
            <div className='card_kcal'>
                <div>
                    <div>단백질</div>
                    <h2>200g</h2>
                </div>
                <div>
                    <div>탄수화물</div>
                    <h2>100g</h2>
                </div>
                <div>
                    <div>지방</div>
                    <h2>50g</h2>

                </div>
                <div>
                    <div>총 칼로리</div>
                    <h2>900kcal</h2>
                </div>
            </div>
        </div>
    )
}

export default Sicksa
