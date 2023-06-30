import React from 'react'

const Title = ({text,num}:{text:string,num:string}) => {
  return (
    <h2>
        <span>{num}</span>
        {text}
    </h2>
  )
}

export default Title