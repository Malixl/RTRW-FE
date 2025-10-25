import PropTypes from 'prop-types';
import { List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const ObjectiveItem = ({ title, description }) => {
  return (
    <List.Item className="border-0 py-4 md:py-6 group">
      <div className="flex gap-4 sm:gap-5 items-start w-full p-4 sm:p-5 rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50">
        {/* Icon with gradient */}
        <div className="relative flex-shrink-0 mt-1">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full p-2">
            <CheckCircleOutlined className="text-xl md:text-2xl" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </List.Item>
  );
};

ObjectiveItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ObjectiveItem;
