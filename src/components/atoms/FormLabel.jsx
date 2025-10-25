import PropTypes from 'prop-types';

const FormLabel = ({ children, required = false, htmlFor, className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-semibold text-gray-700 mb-2 ${className}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default FormLabel;
