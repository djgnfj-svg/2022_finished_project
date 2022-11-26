import React from 'react'
import './Infobase.css'

function Infobase() {
    return (
        <div className='info_base'>
            <div>
                <div className="info_info">나이 (만)</div>
                <input />
                <span>세</span>
            </div>
            <div>
                <div className="info_info">신장 (키)</div>
                <input />
                <span>cm</span>
            </div>
            <div>
                <div className="info_info">몸무게</div>
                <input />
                <span>kg</span>
            </div>
        </div>

    )
}

export default Infobase
