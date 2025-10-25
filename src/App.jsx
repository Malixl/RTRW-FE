import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import MapPage from "./pages/MapPage";
import PeriodePage from "./pages/PeriodePage";
import BeritaPage from "./pages/BeritaPage";
import WilayahPage from "./pages/dashboard/WilayahPage";
import PolaruangPage from "./pages/dashboard/PolaruangPage";
import RtrwPage from "./pages/dashboard/RtrwPage";
import KlasifikasiPage from "./pages/dashboard/KlasifikasiPage";
import BeritaDashboardPage from "./pages/dashboard/BeritaPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/wilayah" element={<WilayahPage />} />
        <Route path="/dashboard/polaruang" element={<PolaruangPage />} />
        <Route path="/dashboard/rtrw" element={<RtrwPage />} />
        <Route path="/dashboard/klasifikasi" element={<KlasifikasiPage />} />
        <Route path="/dashboard/berita" element={<BeritaDashboardPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/periode" element={<PeriodePage />} />
        <Route path="/berita" element={<BeritaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
