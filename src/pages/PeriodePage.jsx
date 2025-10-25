import { Layout, Table, Button, Space, Typography } from "antd";
import {
  DownloadOutlined,
  EnvironmentOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const PeriodePage = () => {
  const navigate = useNavigate();

  const dataSource = [
    {
      key: "1",
      periode: "2024 - 2043",
      tahun: "20 Tahun",
      perda: "Perda No. 2 Tahun 2024",
      pdfUrl: "/documents/RTRW-Gorontalo-2024-2043.pdf",
    },
  ];

  const columns = [
    {
      title: "Periode RTRW",
      dataIndex: "periode",
      key: "periode",
      render: (text) => (
        <div className="font-semibold text-gray-800">
          <div className="text-lg">{text}</div>
          <div className="text-sm text-gray-500 font-normal mt-1">
            {dataSource[0].tahun}
          </div>
        </div>
      ),
    },
    {
      title: "Dasar Hukum",
      dataIndex: "perda",
      key: "perda",
      render: (text) => (
        <div>
          <div className="font-medium text-gray-700">{text}</div>
          <div className="text-xs text-gray-500 mt-1">Sumber: bpk.go.id</div>
        </div>
      ),
      responsive: ["md"],
    },
    {
      title: "Download PDF",
      key: "download",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={() => {
            const link = document.createElement("a");
            link.href = record.pdfUrl;
            link.download = `RTRW-Gorontalo-${record.periode}.pdf`;
            link.click();
          }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 border-0 shadow-md hover:shadow-lg"
        >
          <span className="hidden sm:inline">Unduh PDF</span>
          <span className="sm:hidden">PDF</span>
        </Button>
      ),
    },
    {
      title: "Lihat Peta",
      key: "map",
      render: () => (
        <Button
          type="default"
          icon={<EnvironmentOutlined />}
          onClick={() => navigate("/map")}
          className="border-primary-500 text-primary-600 hover:bg-primary-50"
        >
          <span className="hidden sm:inline">Buka Peta</span>
          <span className="sm:hidden">Peta</span>
        </Button>
      ),
    },
  ];

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
                  📅 Periode Perencanaan
                </span>
              </div>
            </div>

            <Title
              level={1}
              className="!text-white !mb-4 !font-display text-4xl md:text-5xl lg:text-6xl"
            >
              Periode RTRW Gorontalo
            </Title>
            <Paragraph className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto">
              Dokumen perencanaan tata ruang wilayah Provinsi Gorontalo untuk berbagai periode perencanaan pembangunan daerah
            </Paragraph>
          </div>
        </div>

        {/* Wave decoration */}
        {/* <div className="absolute bottom-[-2px] left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#f8fafc"
            />
          </svg>
        </div> */}
      </div>

      <Content className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Info Card */}
            <div className="bg-gradient-to-r from-blue-50 to-primary-50 border-l-4 border-primary-600 rounded-xl p-6 mb-8 animate-fade-in">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-xl">ℹ️</span>
                Informasi Penting
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Halaman ini menyediakan akses ke dokumen-dokumen RTRW Provinsi Gorontalo dari berbagai periode perencanaan. Setiap dokumen mengacu pada Peraturan Daerah yang berlaku dan memuat rencana penataan ruang wilayah untuk jangka waktu tertentu.
              </p>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl shadow-elegant overflow-hidden animate-slide-up border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <Title level={3} className="!mb-2 !text-gray-800">
                  Dokumen RTRW Tersedia
                </Title>
                <Paragraph className="!mb-0 text-gray-600">
                  Daftar dokumen perencanaan tata ruang dari berbagai periode - unduh dokumen lengkap atau lihat visualisasi peta interaktif
                </Paragraph>
              </div>

              <div className="overflow-x-auto">
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  className="custom-table"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">📄</div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Format Digital
                </h4>
                <p className="text-sm text-gray-600">
                  Dokumen tersedia dalam format PDF yang dapat diunduh dan
                  dibaca offline
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🗺️</div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Peta Interaktif
                </h4>
                <p className="text-sm text-gray-600">
                  Visualisasi GIS lengkap dengan layer kawasan yang dapat
                  di-toggle
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">⏱️</div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Multi Periode
                </h4>
                <p className="text-sm text-gray-600">
                  Akses dokumen dari berbagai periode perencanaan untuk referensi dan perbandingan
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default PeriodePage;
