import React from 'react'

const fruits =["Apple","Mango","Banana"]

const Fruits = () => {
  return (
    <div>
        {fruits.map(fruit=>
        <h1>{fruit}</h1>)}
    </div>
  )
}

export default Fruits