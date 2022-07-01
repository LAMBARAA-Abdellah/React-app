import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


export const Header = ({title}) => {
    const
    return (

            <header class='header'>
                <h1 style={headingStyle} > {title}</h1>
                <Button color='green'  title='Add' onClick={} /> 
            
            </header>


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
