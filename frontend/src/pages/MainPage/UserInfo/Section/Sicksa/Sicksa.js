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
      <div style={{display:"flex" , flexDirection:"column"}}>
        <h2 style={{ marginBottom: "0px" }}>식사 횟수</h2>
        <div className='day_sicksa' style={{ display: "flex", flexDirection: "row !important", width: "150px", margin: "0 auto" }}>
          {many_meals.map((item, index) => (
            <p style={{ fontSize: "18px", marginRight: "10px", width: "200px" }}>
              <form>
                <label for={`sicksa${index}`}>
                  <input type='checkbox' name='playing' id={`sicksa${index}`} value={item.value}
                    onChange={(e) => handleChangeCheck(e.currentTarget.checked, item.value)} checked={checkedInputs === item.value ? true : false} />
                  <i className='circle'></i>
                  {item.name}
                </label>
              </form>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sicksa
