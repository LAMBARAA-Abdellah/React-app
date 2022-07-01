import React from 'react'

const button = (props) => {
  return (
    <div>
        <input style={{backgroundColor:props.color}} type="submit" class="btn" value="props.title" />
        <button style={{backgroundColor:props.color}} class="btn">{props.title}</button>
    </div>
  )
}

export default button