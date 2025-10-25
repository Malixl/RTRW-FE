import { Layout } from 'antd';
import { 
  EnvironmentOutlined, 
  MailOutlined, 
  PhoneOutlined,
  HeartFilled 
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-0 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-accent-600 to-primary-600 rounded-full blur-3xl opacity-10"></div>
      
      <div className="container-custom py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              RTRW Gorontalo
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Sistem Informasi Rencana Tata Ruang Wilayah Provinsi Gorontalo untuk perencanaan pembangunan berkelanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-base md:text-lg mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-3">
              {['Beranda', 'Tentang RTRW', 'Peta Interaktif', 'Dokumen'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-base md:text-lg mb-4 text-white">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors duration-300 text-sm md:text-base">
                <EnvironmentOutlined className="text-primary-500 text-lg md:text-xl mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span>Jl. Nani Wartabone, Gorontalo</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors duration-300 text-sm md:text-base">
                <PhoneOutlined className="text-primary-500 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span>(0435) 821016</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors duration-300 text-sm md:text-base">
                <MailOutlined className="text-primary-500 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="break-all">info@gorontaloprov.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6 md:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Pemerintah Provinsi Gorontalo. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
            Dibuat dengan <HeartFilled className="text-red-500 animate-pulse" /> untuk Gorontalo
          </p>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
