import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import SectionHeader from '../molecules/SectionHeader';
import InfoCard from '../molecules/InfoCard';

const ContentsSection = ({ data }) => {
  const { title, icon, items } = data;

  return (
    <section id="konten" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative circles - Adjusted for mobile */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title={title} icon={icon} centered />
          
          <Row gutter={[16, 16]} className="mt-8 md:mt-10 sm:gutter-24 md:gutter-32">
            {items.map((item, index) => (
              <Col xs={24} sm={12} lg={6} key={item.id}>
                <div 
                  className="h-full animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <InfoCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

ContentsSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.node,
      })
    ).isRequired,
  }).isRequired,
};

export default ContentsSection;
