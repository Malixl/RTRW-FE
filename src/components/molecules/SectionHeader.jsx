import PropTypes from "prop-types";

const SectionHeader = ({
  title,
  description,
  icon: IconComponent,
  centered = false,
}) => {
  const alignment = centered
    ? "text-center items-center"
    : "text-left items-start";

  return (
    <div
      className={`flex flex-col ${alignment} gap-4 md:gap-5 mb-8 md:mb-12 animate-slide-up`}
    >
      {IconComponent && (
        <div className="relative inline-block">
          <div className="relative bg-primary-50 text-primary-600 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-elegant">
            <IconComponent className="text-4xl md:text-5xl" />
          </div>
        </div>
      )}

      <div className={centered ? "text-center" : "text-left"}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">
          {title}
        </h2>
        {description && (
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl px-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.elementType,
  centered: PropTypes.bool,
};

export default SectionHeader;
