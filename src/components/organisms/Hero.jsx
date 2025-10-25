import PropTypes from "prop-types";
import { Layout } from "antd";
import { EnvironmentOutlined, ArrowDownOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Hero = ({ title, subtitle, description }) => {
  return (
    <AntHeader className="relative h-auto p-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.bisnis.com/posts/2020/03/30/1219652/antarafoto-upaya-pencegahan-covid-19-gorontalo-260320-aws-8-1-min.jpg')`,
            filter: "blur(1.5px)",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 via-primary-800/88 to-primary-900/92"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Decorative elements - Hidden on mobile */}
      <div className="absolute inset-0 opacity-10 z-[1] hidden md:block">
        <div className="absolute top-20 right-20 w-72 h-72 lg:w-96 lg:h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 lg:w-80 lg:h-80 bg-accent-400 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-custom py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center mb-6 sm:mb-8 animate-slide-down">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-white/30 shadow-lg">
              <div className="flex items-center gap-2 text-white">
                <EnvironmentOutlined className="text-lg sm:text-2xl" />
                <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  Perencanaan Tata Ruang
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 animate-slide-up leading-tight px-4">
            {title}
          </h1>

          {/* Subtitle */}
          <h2
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 text-primary-500 animate-slide-up px-4"
            style={{ animationDelay: "0.1s" }}
          >
            {subtitle}
          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 animate-slide-up px-4"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <div
            className="animate-slide-up px-4"
            style={{ animationDelay: "0.3s" }}
          >
            <button 
              onClick={() => {
                const nextSection = document.getElementById('tentang');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-elegant hover:shadow-elegant-hover transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Jelajahi Lebih Lanjut</span>
              <ArrowDownOutlined className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-[-30px] left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </AntHeader>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
