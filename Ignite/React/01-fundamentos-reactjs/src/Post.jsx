import React from 'react'

export const Post = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </div>
  )
}
 
