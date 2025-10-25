import { Row, Col } from "antd";
import {
  FileTextOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import DashboardLayout from "../components/templates/DashboardLayout";
import StatCard from "../components/molecules/StatCard";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Dokumen",
      value: "24",
      icon: FileTextOutlined,
      color: "blue",
      trend: { positive: true, value: "12% dari bulan lalu" },
    },
    {
      title: "Kawasan Terdaftar",
      value: "156",
      icon: EnvironmentOutlined,
      color: "green",
      trend: { positive: true, value: "8% dari bulan lalu" },
    },
    {
      title: "Pengguna Aktif",
      value: "2,345",
      icon: TeamOutlined,
      color: "purple",
      trend: { positive: false, value: "3% dari bulan lalu" },
    },
    {
      title: "Proyek Selesai",
      value: "89",
      icon: CheckCircleOutlined,
      color: "orange",
      trend: { positive: true, value: "15% dari bulan lalu" },
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Dokumen RTRW 2024 diupload",
      time: "2 jam yang lalu",
      type: "upload",
    },
    {
      id: 2,
      title: "Peta Kawasan Industri diperbarui",
      time: "5 jam yang lalu",
      type: "update",
    },
    {
      id: 3,
      title: "User baru terdaftar",
      time: "1 hari yang lalu",
      type: "user",
    },
    {
      id: 4,
      title: "Laporan bulanan disetujui",
      time: "2 hari yang lalu",
      type: "approval",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <div className="animate-slide-down">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Selamat datang kembali! Berikut ringkasan sistem RTRW Gorontalo.
          </p>
        </div>

        {/* Stats Cards */}
        <Row gutter={[16, 16]} className="animate-slide-up">
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <div
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-scale-in"
              >
                <StatCard
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  color={stat.color}
                  trend={stat.trend}
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Content Grid */}
        <Row gutter={[16, 16]}>
          {/* Recent Activities */}
          <Col xs={24} lg={14}>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-elegant animate-slide-up">
              <h2 className="font-display text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Aktivitas Terbaru
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {activity.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Quick Actions */}
          <Col xs={24} lg={10}>
            <div
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-elegant text-white animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Aksi Cepat
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Upload Dokumen Baru",
                  "Lihat Peta Interaktif",
                  "Buat Laporan",
                  "Kelola Pengguna",
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg md:rounded-xl text-left text-sm sm:text-base transition-all duration-300 hover:translate-x-2"
                  >
                    → {action}
                  </button>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-accent-50 to-primary-50 border-l-4 border-primary-600 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 animate-fade-in">
          <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
            📢 Pengumuman
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Sistem RTRW Gorontalo akan menjalani maintenance terjadwal pada
            tanggal 30 Oktober 2025 pukul 00:00 - 04:00 WITA.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
