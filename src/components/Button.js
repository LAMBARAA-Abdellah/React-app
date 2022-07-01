
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, title, onClick }) => {

    return (
        <div>
            {/* <input style={{backgroundColor:props.color}} type="submit" class="btn" value="props.title" /> */}
            <button 
                onClick={onClick}
                style={{ backgroundColor: color }}
                className="btn">
                {title}

            </button>
        </div>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,
}
Button.defaultProps = {
    color: 'steelblue'
}
export default Button