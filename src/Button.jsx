import PropTypes from 'prop-types';

function Button({ variant, size, onClick, children }) {
 return (
 <button 
 className={`btn btn-${variant} btn-${size}`}
 onClick={onClick}
 >
 {children}
 </button>
 );
}

// Define expected prop types
Button.propTypes = {
 variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
 size: PropTypes.oneOf(['sm', 'md', 'lg']),
 onClick: PropTypes.func.isRequired,
 children: PropTypes.node.isRequired
};

// Provide default values for optional props
Button.defaultProps = {
 variant: 'primary',
 size: 'md'
};
export default Button;

// Usage: <Button onClick={handleClick}>Click Me</Button>
// Automatically uses default variant and size