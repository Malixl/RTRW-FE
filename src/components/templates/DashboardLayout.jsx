import PropTypes from "prop-types";
import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  EnvironmentOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  TagsOutlined,
  BookOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/dashboard/wilayah",
      icon: <EnvironmentOutlined />,
      label: "Wilayah",
    },
    {
      key: "/dashboard/polaruang",
      icon: <AppstoreOutlined />,
      label: "Pola Ruang",
    },
    {
      key: "/dashboard/rtrw",
      icon: <FileTextOutlined />,
      label: "Dokumen RTRW",
    },
    {
      key: "/dashboard/klasifikasi",
      icon: <TagsOutlined />,
      label: "Klasifikasi",
    },
    {
      key: "/dashboard/berita",
      icon: <BookOutlined />,
      label: "Berita",
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      navigate("/login");
    } else {
      navigate(key);
    }
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Layout className="min-h-screen">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth={0}
        className={`
          bg-gradient-to-b from-gray-900 to-gray-800
          fixed md:relative z-50 h-screen
          ${mobileMenuOpen ? "left-0" : "-left-full md:left-0"}
          transition-all duration-300
        `}
        width={260}
      >
        <div className="p-3 sm:p-4 flex items-center justify-center gap-2 sm:gap-3 border-b border-gray-700">
          <div className="bg-primary-100 text-primary-600 p-1.5 sm:p-2 rounded-lg">
            <EnvironmentOutlined className="text-xl sm:text-2xl" />
          </div>
          {!collapsed && (
            <div className="text-white">
              <h2 className="font-display text-base sm:text-lg font-bold">
                RTRW
              </h2>
              <p className="text-xs text-gray-400">Gorontalo</p>
            </div>
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
          className="bg-transparent border-r-0 mt-4"
        />

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors duration-300"
          >
            <LogoutOutlined />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </Sider>

      <Layout className="w-full">
        {/* Header */}
        <Header className="bg-white shadow-sm px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileMenuOpen(!mobileMenuOpen);
              } else {
                setCollapsed(!collapsed);
              }
            }}
            className="text-xl sm:text-2xl text-gray-600 hover:text-primary-600 transition-colors"
          >
            {collapsed || !mobileMenuOpen ? (
              <MenuUnfoldOutlined />
            ) : (
              <MenuFoldOutlined />
            )}
          </button>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
              A
            </div>
          </div>
        </Header>

        {/* Content */}
        <Content className="m-3 sm:m-4 md:m-6 p-4 sm:p-5 md:p-6 bg-gray-50 rounded-xl md:rounded-2xl min-h-[calc(100vh-140px)]">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
