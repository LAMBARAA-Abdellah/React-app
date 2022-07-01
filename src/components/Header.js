import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


export const Header = (props) => {
    return (
        <div>
            <header class='header'>
                <h1 style={headingStyle} > {props.title}</h1>
                <Button color='green' text='Hello' /> 
            </header>
           

        </div>

    )
}
//css in js
const headingStyle = {
    // color:'red',
    //  backgroundColor:'black',

}
Header.defaultProps = {
    title: 'Youcode developper',
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header
