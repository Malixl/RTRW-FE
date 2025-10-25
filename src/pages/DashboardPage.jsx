import { useState, useEffect } from "react";
import { Row, Col, Table, Spin, message } from "antd";
import {
  FileTextOutlined,
  EnvironmentOutlined,
  AppstoreOutlined,
  TagsOutlined,
  BookOutlined,
} from "@ant-design/icons";
import DashboardLayout from "../components/templates/DashboardLayout";
import StatCard from "../components/molecules/StatCard";
import wilayahService from "../services/wilayah.service";
import polaruangService from "../services/polaruang.service";
import rtrwService from "../services/rtrw.service";
import klasifikasiService from "../services/klasifikasi.service";
import beritaService from "../services/berita.service";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    {
      title: "Total Wilayah",
      value: "0",
      icon: EnvironmentOutlined,
      color: "blue",
    },
    {
      title: "Pola Ruang",
      value: "0",
      icon: AppstoreOutlined,
      color: "green",
    },
    {
      title: "Dokumen RTRW",
      value: "0",
      icon: FileTextOutlined,
      color: "purple",
    },
    {
      title: "Klasifikasi",
      value: "0",
      icon: TagsOutlined,
      color: "orange",
    },
    {
      title: "Berita",
      value: "0",
      icon: BookOutlined,
      color: "cyan",
    },
  ]);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch counts from all endpoints (without pagination to get total)
        const [wilayahData, polaruangData, rtrwData, klasifikasiData, beritaData] = await Promise.all([
          wilayahService.getAll(),
          polaruangService.getAll(),
          rtrwService.getAll(),
          klasifikasiService.getAll(),
          beritaService.getAll(),
        ]);

        // Update stats with actual counts
        setStats([
          {
            title: "Total Wilayah",
            value: Array.isArray(wilayahData) ? wilayahData.length.toString() : "0",
            icon: EnvironmentOutlined,
            color: "blue",
          },
          {
            title: "Pola Ruang",
            value: Array.isArray(polaruangData) ? polaruangData.length.toString() : "0",
            icon: AppstoreOutlined,
            color: "green",
          },
          {
            title: "Dokumen RTRW",
            value: Array.isArray(rtrwData) ? rtrwData.length.toString() : "0",
            icon: FileTextOutlined,
            color: "purple",
          },
          {
            title: "Klasifikasi",
            value: Array.isArray(klasifikasiData) ? klasifikasiData.length.toString() : "0",
            icon: TagsOutlined,
            color: "orange",
          },
          {
            title: "Berita",
            value: Array.isArray(beritaData) ? beritaData.length.toString() : "0",
            icon: BookOutlined,
            color: "cyan",
          },
        ]);

        // Combine all data for recent activities (take latest 5 items)
        const allActivities = [];
        
        if (Array.isArray(rtrwData)) {
          rtrwData.slice(0, 3).forEach(item => {
            allActivities.push({
              id: `rtrw-${item.id}`,
              title: `Dokumen RTRW: ${item.nama || item.title || 'Tanpa Judul'}`,
              time: formatDate(item.created_at || item.updated_at),
              type: 'rtrw',
            });
          });
        }

        if (Array.isArray(wilayahData)) {
          wilayahData.slice(0, 2).forEach(item => {
            allActivities.push({
              id: `wilayah-${item.id}`,
              title: `Wilayah: ${item.nama || item.name || 'Tanpa Nama'}`,
              time: formatDate(item.created_at || item.updated_at),
              type: 'wilayah',
            });
          });
        }

        setRecentActivities(allActivities.slice(0, 5));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        message.error('Gagal memuat data dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Baru saja';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    
    if (diffDays === 0) {
      if (diffHours === 0) return 'Baru saja';
      return `${diffHours} jam yang lalu`;
    } else if (diffDays === 1) {
      return '1 hari yang lalu';
    } else if (diffDays < 7) {
      return `${diffDays} hari yang lalu`;
    } else {
      return date.toLocaleDateString('id-ID');
    }
  };

  return (
    <DashboardLayout>
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <Spin size="large" tip="Memuat data..." />
        </div>
      ) : (
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
              <Col xs={24} sm={12} lg={index < 3 ? 8 : 12} key={index}>
                <div
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-scale-in"
                >
                  <StatCard
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    color={stat.color}
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
                {recentActivities.length > 0 ? (
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
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Belum ada aktivitas terbaru
                  </p>
                )}
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
                    { label: "Kelola Wilayah", path: "/dashboard/wilayah" },
                    { label: "Kelola Pola Ruang", path: "/dashboard/polaruang" },
                    { label: "Kelola RTRW", path: "/dashboard/rtrw" },
                    { label: "Kelola Klasifikasi", path: "/dashboard/klasifikasi" },
                    { label: "Kelola Berita", path: "/dashboard/berita" },
                  ].map((action, index) => (
                    <button
                      key={index}
                      onClick={() => window.location.href = action.path}
                      className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg md:rounded-xl text-left text-sm sm:text-base transition-all duration-300 hover:translate-x-2"
                    >
                      → {action.label}
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
              Sistem RTRW Gorontalo siap digunakan. Kelola data wilayah, pola ruang, RTRW, dan klasifikasi dengan mudah.
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;
