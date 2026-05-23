import React from 'react'

//deconstructoring props
const Card = ({name, message, emoji}) => {
  return (
    <div>
        <h1>

        {name} {message} {emoji}
        </h1>
    </div>
  )
}

export default Card