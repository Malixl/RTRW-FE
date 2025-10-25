import PropTypes from "prop-types";
import { Card } from "antd";

const InfoCard = ({ title, description, icon, hoverable = true }) => {
  return (
    <Card
      hoverable={hoverable}
      className="h-full border-0 rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-500 shadow-elegant hover:shadow-elegant-hover hover:-translate-y-1 md:hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="flex flex-col items-start gap-4 md:gap-5 p-1 md:p-2">
        {/* Icon with gradient background */}
        {icon && (
          <div className="relative">
            <div className="relative bg-primary-50 rounded-xl md:rounded-2xl p-3 md:p-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <span className="text-4xl md:text-5xl filter drop-shadow-lg">
                {icon}
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-primary-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
      </div>
    </Card>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
  hoverable: PropTypes.bool,
};

export default InfoCard;
