import { Layout, Card, Button, Tag, Input, Row, Col, Typography } from "antd";
import {
  CalendarOutlined,
  UserOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const BeritaPage = () => {
  const navigate = useNavigate();

  // Sample news data - replace with API call
  const newsData = [
    {
      id: 1,
      title: "Pemerintah Provinsi Gorontalo Sahkan RTRW 2024-2043",
      excerpt:
        "Gubernur Gorontalo resmi menandatangani Peraturan Daerah No. 2 Tahun 2024 tentang Rencana Tata Ruang Wilayah Provinsi Gorontalo untuk periode 20 tahun ke depan...",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      date: "15 Januari 2024",
      author: "Admin RTRW",
      category: "Peraturan",
      tags: ["RTRW", "Perda", "Tata Ruang"],
    },
    {
      id: 2,
      title: "Sosialisasi RTRW Provinsi Gorontalo kepada Masyarakat",
      excerpt:
        "Dinas Pekerjaan Umum dan Penataan Ruang Provinsi Gorontalo menggelar sosialisasi RTRW kepada masyarakat dan stakeholder terkait perencanaan pembangunan wilayah...",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      date: "20 Februari 2024",
      author: "Humas Gorontalo",
      category: "Kegiatan",
      tags: ["Sosialisasi", "Masyarakat"],
    },
    {
      id: 3,
      title: "Kawasan Strategis Provinsi dalam RTRW 2024-2043",
      excerpt:
        "RTRW Provinsi Gorontalo menetapkan beberapa kawasan strategis yang akan menjadi fokus pembangunan, termasuk kawasan industri, pariwisata, dan pertanian...",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
      date: "10 Maret 2024",
      author: "Tim Perencanaan",
      category: "Perencanaan",
      tags: ["Kawasan Strategis", "Pembangunan"],
    },
    {
      id: 4,
      title: "Integrasi Peta Digital RTRW dengan Sistem GIS",
      excerpt:
        "Pemerintah meluncurkan platform peta digital interaktif berbasis GIS untuk memudahkan masyarakat mengakses informasi tata ruang wilayah Provinsi Gorontalo...",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800",
      date: "5 April 2024",
      author: "Tim IT RTRW",
      category: "Teknologi",
      tags: ["GIS", "Peta Digital", "Teknologi"],
    },
    {
      id: 5,
      title: "Evaluasi Implementasi RTRW Tahun Pertama",
      excerpt:
        "Pemerintah Provinsi melakukan evaluasi komprehensif terhadap implementasi RTRW pada tahun pertama, mencakup pencapaian target dan kendala di lapangan...",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      date: "18 Mei 2024",
      author: "Bappeda Gorontalo",
      category: "Evaluasi",
      tags: ["Evaluasi", "Monitoring"],
    },
    {
      id: 6,
      title: "Pelatihan Pengendalian Pemanfaatan Ruang untuk SKPD",
      excerpt:
        "Bappeda menyelenggarakan pelatihan untuk Satuan Kerja Perangkat Daerah terkait pengendalian pemanfaatan ruang sesuai RTRW Provinsi Gorontalo...",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      date: "22 Juni 2024",
      author: "Bappeda Gorontalo",
      category: "Pelatihan",
      tags: ["Pelatihan", "SKPD", "Pengendalian"],
    },
  ];

  const NewsCard = ({ news }) => (
    <Card
      hoverable
      className="h-full border-0 rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group"
      cover={
        <div className="relative h-56 overflow-hidden">
          <img
            alt={news.title}
            src={news.image}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Tag color="blue" className="font-semibold">
              {news.category}
            </Tag>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-3">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <CalendarOutlined />
            {news.date}
          </span>
          <span className="flex items-center gap-1">
            <UserOutlined />
            {news.author}
          </span>
        </div>

        {/* Title */}
        <Title
          level={4}
          className="!mb-0 !text-gray-800 line-clamp-2 group-hover:text-primary-600 transition-colors"
        >
          {news.title}
        </Title>

        {/* Excerpt */}
        <Paragraph className="!mb-0 text-gray-600 line-clamp-3">
          {news.excerpt}
        </Paragraph>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {news.tags.map((tag, idx) => (
            <Tag key={idx} className="text-xs">
              #{tag}
            </Tag>
          ))}
        </div>

        {/* Read More */}
        <Button
          type="link"
          className="!p-0 !h-auto text-primary-600 font-semibold group/btn"
          icon={
            <ArrowRightOutlined className="group-hover/btn:translate-x-1 transition-transform" />
          }
          iconPosition="end"
        >
          Baca Selengkapnya
        </Button>
      </div>
    </Card>
  );

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 animate-slide-down">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-semibold text-sm tracking-wide uppercase">
                  📰 Berita & Artikel
                </span>
              </div>
            </div>

            <Title
              level={1}
              className="!text-white !mb-4 !font-display text-4xl md:text-5xl lg:text-6xl"
            >
              Berita RTRW Gorontalo
            </Title>
            <Paragraph className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto">
              Informasi terkini seputar perencanaan, pelaksanaan, dan
              pengembangan Tata Ruang Wilayah Provinsi Gorontalo
            </Paragraph>
          </div>
        </div>
      </div>

      <Content className="section-padding">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Back Button & Search */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <Search
                placeholder="Cari berita..."
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                className="w-full sm:w-80"
              />
            </div>

            {/* Featured News */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Title level={2} className="!mb-2">
                    Berita Utama
                  </Title>
                  <Text className="text-gray-600">
                    Informasi terbaru dan paling penting
                  </Text>
                </div>
              </div>

              <Card
                hoverable
                className="border-0 rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group"
              >
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={12}>
                    <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden rounded-xl">
                      <img
                        alt={newsData[0].title}
                        src={newsData[0].image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Tag color="red" className="font-semibold text-sm">
                          FEATURED
                        </Tag>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="flex flex-col gap-4 h-full justify-center">
                      <Tag color="blue" className="w-fit font-semibold">
                        {newsData[0].category}
                      </Tag>

                      <Title
                        level={2}
                        className="!mb-0 group-hover:text-primary-600 transition-colors"
                      >
                        {newsData[0].title}
                      </Title>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <CalendarOutlined />
                          {newsData[0].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <UserOutlined />
                          {newsData[0].author}
                        </span>
                      </div>

                      <Paragraph className="text-gray-600 text-base">
                        {newsData[0].excerpt}
                      </Paragraph>

                      <div className="flex flex-wrap gap-2">
                        {newsData[0].tags.map((tag, idx) => (
                          <Tag key={idx}>#{tag}</Tag>
                        ))}
                      </div>

                      <Button
                        type="primary"
                        size="large"
                        icon={<ArrowRightOutlined />}
                        iconPosition="end"
                        className="w-fit bg-gradient-to-r from-primary-600 to-primary-700 border-0"
                      >
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>

            {/* All News Grid */}
            <div>
              <div className="mb-6">
                <Title level={2} className="!mb-2">
                  Semua Berita
                </Title>
                <Text className="text-gray-600">
                  Artikel dan informasi terkini
                </Text>
              </div>

              <Row gutter={[24, 24]}>
                {newsData.slice(1).map((news, index) => (
                  <Col xs={24} sm={12} lg={8} key={news.id}>
                    <div
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <NewsCard news={news} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="large" className="px-8">
                Muat Lebih Banyak
              </Button>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default BeritaPage;
