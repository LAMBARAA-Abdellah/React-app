

import PropTypes from 'prop-types'

const Button = ({ color, title, onClick }) => {
    
    return (
  
          
            <button 
                onClick={onClick}
                style={{ backgroundColor: color }}
                className="btn">
                {title}

            </button>

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