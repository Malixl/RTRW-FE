import PropTypes from "prop-types";

const StatCard = ({ title, value, icon, color = "blue", trend }) => {
  const Icon = icon;
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {value}
          </h3>
          {trend && (
            <p
              className={`text-xs sm:text-sm font-semibold ${
                trend.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend.positive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>

        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${colors[color]} rounded-lg md:rounded-xl blur-md md:blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
          ></div>
          <div
            className={`relative bg-gradient-to-br ${colors[color]} text-white p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
          >
            <Icon className="text-xl sm:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.oneOf(["blue", "green", "purple", "orange"]),
  trend: PropTypes.shape({
    positive: PropTypes.bool,
    value: PropTypes.string,
  }),
};

export default StatCard;
