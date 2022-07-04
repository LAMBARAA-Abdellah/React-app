import PropTypes from 'prop-types'
import Button from './Button'


export const Header = ({title,onAdd,showAdd}) => {
  
    return (

            <header className='header'>
                <h1 style={headingStyle} > {title}</h1>
                <Button color={showAdd ? 'red':'green'}  title={showAdd? 'Close':'Add'} onClick={onAdd} /> 
               
            
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
