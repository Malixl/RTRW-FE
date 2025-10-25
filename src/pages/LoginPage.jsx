import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import AuthLayout from '../components/organisms/AuthLayout';
import AuthCard from '../components/organisms/AuthCard';
import LoginForm from '../components/molecules/LoginForm';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login data:', formData);
      message.success('Login berhasil!');
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Selamat Datang"
        subtitle="Masuk ke akun RTRW Gorontalo Anda"
        icon={LoginOutlined}
      >
        <LoginForm onSubmit={handleLogin} loading={loading} />
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
