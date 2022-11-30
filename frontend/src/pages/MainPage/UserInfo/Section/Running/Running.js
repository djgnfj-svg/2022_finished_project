import React, { useEffect, useState } from 'react'
import './Running.css'

function Running({ check }) {
    const [checkedInputs, setCheckedInputs] = useState();
    const [checkedPlay, setCheckedPlay] = useState();

    useEffect(() => {
        if (checkedInputs !== null && checkedPlay !== null) {
            check(checkedInputs, checkedPlay)
        }
    }, [checkedInputs, checkedPlay])

    const playing = [
        {
            name: '적음',
            value: 1.2
        }, {

            name: '보통',
            value: 1.4
        }, {

            name: '많음',
            value: 1.6
        }
    ]
    const play = [
        {
            name: '0회',
            value: 0
        }, {
            name: '1~3회',
            value: 0.1
        }, {
            name: '4~6회',
            value: 0.2
        }
        , {
            name: '7회 이상',
            value: 0.3
        }
    ]

    const handleChangeCheck = (checked, id) => {
        if (!checked) {
            setCheckedInputs('');
        } else {
            setCheckedInputs(id)
        }
    }
    const handleChangeplay = (checked, id) => {
        if (!checked) {
            setCheckedPlay('');
        } else {
            setCheckedPlay(id)
        }
    }

    return (
        <div className='info_Running'>
            <div>
                <h2 style={{marginBottom:"5px"}}>활동량</h2>
                <div style={{fontSize:"15px" , fontWeight:"500", color:"gray" , marginBottom:"10px"}}>(하루 평균)</div>
                <div className='Running_Checklist'>
                    {playing.map((item) => (
                        <p>
                            <input type='checkbox' name='playing' value={item.value}
                                onChange={(e) => handleChangeCheck(e.currentTarget.checked, item.value)} checked={checkedInputs === item.value ? true : false} />
                            <span>{item.name}</span>
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <h2 style={{marginBottom:"5px"}}>운동량</h2>
                <div style={{fontSize:"15px" , fontWeight:"500", color:"gray" , marginBottom:"10px"}}>(1주일 기준)</div>
                <div className='Running_Checklist'>
                    {play.map((item) => (
                        <p>
                            <input type='checkbox' name='playing' value={item.value}
                                onChange={(e) => handleChangeplay(e.currentTarget.checked, item.value)} checked={checkedPlay === item.value ? true : false} />
                            <span>{item.name}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Running
