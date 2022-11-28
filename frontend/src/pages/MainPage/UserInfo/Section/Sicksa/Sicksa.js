import React, { useState } from 'react'

function Sicksa({ check }) {

  const [checkedInputs, setCheckedInputs] = useState()

  const many_meals = [
    {
      name: '2회',
      value: 2
    },
    {
      name: '3회',
      value: 3
    }
  ]

  const handleChangeCheck = (checked, id) => {
    if (!checked) {
      setCheckedInputs('');
    } else {
      setCheckedInputs(id)
      check(id)
    }
  }

  return (
    <div>
      <div>
        <h2 style={{marginBottom:"0px"}}>식사 횟수</h2>
        <div style={{display:"flex" , flexDirection:"row" , width:"100px" , margin:"0 auto"}}> 
          {many_meals.map((item) => (
            <p style={{ fontSize: "18px" }}>
              <input type='checkbox' name='playing' value={item.value}
                onChange={(e) => handleChangeCheck(e.currentTarget.checked, item.value)} checked={checkedInputs === item.value ? true : false} />
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div style={{ color: "rgb(100,100,100)" }}>저희 간식단단에서는 일일 2회이상 식사를 권장드립니다 : )</div>
    </div>
  )
}

export default Sicksa
