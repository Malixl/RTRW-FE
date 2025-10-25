import PropTypes from 'prop-types';
import SectionHeader from '../molecules/SectionHeader';

const DefinitionSection = ({ data }) => {
  const { title, icon, description } = data;

  return (
    <section id="tentang" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements - Hidden on mobile */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl opacity-20 md:opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full blur-3xl opacity-20 md:opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title={title} icon={icon} centered />
          
          <div className="relative mt-8 md:mt-10">
            {/* Quote decoration - Hidden on mobile */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-6xl md:text-8xl text-primary-200 font-serif opacity-50 hidden sm:block">"</div>
            
            <div className="relative bg-gradient-to-br from-white to-primary-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border-l-4 md:border-l-8 border-primary-500 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 animate-scale-in">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                {description}
              </p>
              
              {/* Source badge */}
              <div className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm">
                <span>📜</span>
                <span className="hidden sm:inline">UU No. 26 Tahun 2007 tentang Penataan Ruang</span>
                <span className="sm:hidden">UU No. 26/2007</span>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 text-6xl md:text-8xl text-primary-200 font-serif opacity-50 hidden sm:block">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

DefinitionSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefinitionSection;
