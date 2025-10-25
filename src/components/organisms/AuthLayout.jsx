import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { EnvironmentOutlined } from "@ant-design/icons";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-30"></div>

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #1677ff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 container-custom py-4 sm:py-6">
        <Link to="/" className="inline-flex items-center gap-2 sm:gap-3 group">
          <div className="bg-primary-100 text-primary-600 p-2 sm:p-2.5 md:p-3 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            <EnvironmentOutlined className="text-xl sm:text-2xl" />
          </div>
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-gray-800">
              RTRW
            </h2>
            <p className="text-xs text-gray-600">Provinsi Gorontalo</p>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-8 sm:py-12 flex items-center justify-center min-h-[calc(100vh-100px)]">
        {children}
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
