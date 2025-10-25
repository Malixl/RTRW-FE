import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import MapPage from "./pages/MapPage";
import PeriodePage from "./pages/PeriodePage";
import BeritaPage from "./pages/BeritaPage";
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
        <Route path="/map" element={<MapPage />} />
        <Route path="/periode" element={<PeriodePage />} />
        <Route path="/berita" element={<BeritaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
