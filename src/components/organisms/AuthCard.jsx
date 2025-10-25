import PropTypes from "prop-types";

const AuthCard = ({ title, subtitle, children, icon: IconComponent }) => {
  return (
    <div className="w-full max-w-md animate-scale-in px-4">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-elegant p-6 sm:p-8 md:p-10 border border-gray-100">
        {/* Icon */}
        {IconComponent && (
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative inline-block">
              <div className="relative bg-primary-50 text-primary-600 p-3 md:p-4 rounded-xl md:rounded-2xl">
                <IconComponent className="text-3xl md:text-4xl" />
              </div>
            </div>
          </div>
        )}

        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-600 text-sm sm:text-base">{subtitle}</p>
          )}
        </div>

        {/* Form Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

AuthCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
};

export default AuthCard;
