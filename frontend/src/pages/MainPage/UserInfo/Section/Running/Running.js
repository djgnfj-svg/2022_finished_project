import React, { useState } from 'react'
import './Running.css'

function Running() {
    const [checkedInputs, setCheckedInputs] = useState([]);
    const playing = [
        {
            name: '적음',
            value: 1
        }, {

            name: '보통',
            value: 2
        }, {

            name: '많음',
            value: 3
        }
    ]
    const play = [
        {
            name: '주 0회',
            value: 1
        }, {
            name: '주 1~3회',
            value: 2
        }, {
            name: '주 4~6회',
            value: 3
        }
        , {
            name: '주 7회 이상',
            value: 4
        }
    ]

    const handleChangeCheck = (checked, id) => {
        if (!checked) {
            setCheckedInputs(checkedInputs.filter((el) => el !== id));
        } else {
            setCheckedInputs([...checkedInputs, id])
        }
    }

    return (
        <div className='info_Running'>
            <div>
                <h2>활동량</h2>
                <div>
                    <div>활동량</div>
                    {playing.map((item) => (
                        <p>
                            <input type='checkbox' name='playing' value={item.value}
                                onChange={(e) => handleChangeCheck(e.currentTarget.checked, item.value)} checked={checkedInputs.includes(item.value) ? true : false} />
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <h2>운동량</h2>
                <div>
                    <div>운동량</div>
                    {play.map((item) => (
                        <p>
                            <input type='checkbox' name='play' value={item.value} />
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Running
