import PropTypes from 'prop-types'

const Button = ({text,onClick,classText}) => {
  return (
	<button 
	onClick={onClick}
	className={"btn " + classText }>
      {text}
    </button>
  )
}


Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	classText: PropTypes.string
}
export default Button