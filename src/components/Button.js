import React from 'react'

const button = (props) => {
  return (
    <div>
        <input style={{backgroundColor:props.color}} type="submit" class="btn" value="add" />
    </div>
  )
}

export default button