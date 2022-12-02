import React, { useState } from 'react'
import Gender from '../Gender/Gender'
import Running from '../Running/Running'
import Sicksa from '../Sicksa/Sicksa'
import './Infobase.css'
import axios from 'axios'
import { inputUrl } from '../../../../../apiUrl/ApiUrl'

function Infobase({ submit }) {
    const [userInput, setUserInput] = useState({
        age: "", // 나이
        height: "",  // 키
        weight: "",  // 몸무게
        gender: "M",  // 성별
        general_activities: "", // 활동량
        excise_activity: "", // 운동량
        many_meals: "", // 식사 횟수
    })
    const { age, height, weight } = userInput

    const handleCheckGender = (gen) => {
        setUserInput({
            ...userInput,
            gender: gen
        })
    }
    const handleCheckSicksa = (meals) => {
        setUserInput({
            ...userInput,
            many_meals: meals
        })
    }

    const handleChangeInput = (e) => {
        const { value, name } = e.target
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    const handleCheckPlaying = (general, excise) => {
        setUserInput({
            ...userInput,
            general_activities: general,
            excise_activity: excise
        })
    }
    const handleSubmitInfo = () => {
        axios.post(inputUrl, userInput)
            .then(res => {
                submit(res.data)
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className='info_base'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <h2 style={{ textAlign: "left" }}>인적사항</h2>
                    </div>
                    <div className='injucsahang' style={{ display: "flex", flexDirection: "row" }}>
                        <div className="info_info">나이 (만)</div>
                        <input name='age' onChange={handleChangeInput} value={age} />
                        <span>세</span>
                    </div>
                </div>
                <div>
                    <div className="info_info">신장 (키)</div>
                    <input name='height' onChange={handleChangeInput} value={height} />
                    <span>cm</span>
                </div>
                <div>
                    <div className="info_info">몸무게</div>
                    <input name='weight' onChange={handleChangeInput} value={weight} />
                    <span>kg</span>
                </div>
                <div className='성별'>
                    <Gender check={handleCheckGender} />
                </div>
                <div className='운동' style={{ display: "flex", flexDirection: "row" }}>
                    <Running check={handleCheckPlaying} />
                </div>
                <div className='식사횟수'>
                    <Sicksa check={handleCheckSicksa} />
                </div>
            </div>
            <div className='info_Submit'>
                <button onClick={() => handleSubmitInfo()}>확인하기</button>
            </div>
        </>
    )
}

export default Infobase
