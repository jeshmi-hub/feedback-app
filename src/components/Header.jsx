import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
        <h2>{text}</h2>
      
    </div>

    </header>
    
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: '#6f8844',
    textColor: '#f4bf76'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
