import PropTypes from 'prop-types';

const ErrorText = ({ children, className = '' }) => {
  if (!children) return null;

  return (
    <p className={`text-sm text-red-500 mt-1 ${className}`}>
      {children}
    </p>
  );
};

ErrorText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ErrorText;
