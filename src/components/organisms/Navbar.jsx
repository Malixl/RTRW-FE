import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  EnvironmentOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Periode", to: "/periode" },
  { label: "Berita", to: "/berita" },
  { label: "Map", to: "/map" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md bg-white/85 border-b border-gray-200/60 shadow-sm">
      <div className="container-custom py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="bg-white text-primary-600 p-2 rounded-lg border border-gray-200 shadow-sm group-hover:scale-110 transition-transform">
              <EnvironmentOutlined className="text-xl" />
            </span>
            <span className="font-display font-bold text-lg md:text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              RTRW Provinsi Gorontalo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              Masuk
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md hover:shadow-lg hover:translate-y-[-1px] transition"
            >
              Daftar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white/70 backdrop-blur hover:bg-white transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-custom pb-4">
          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link
              to="/login"
              className="px-3 py-2 rounded-lg text-center text-sm font-semibold border border-gray-200 bg-white hover:bg-gray-50"
            >
              Masuk
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 rounded-lg text-center text-sm font-semibold bg-gradient-to-r from-primary-600 to-primary-700 text-white"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
