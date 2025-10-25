import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import AuthLayout from '../components/organisms/AuthLayout';
import AuthCard from '../components/organisms/AuthCard';
import SignUpForm from '../components/molecules/SignUpForm';

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign up data:', formData);
      message.success('Registrasi berhasil! Silakan login.');
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Buat Akun Baru"
        subtitle="Daftar untuk mengakses sistem RTRW"
        icon={UserAddOutlined}
      >
        <SignUpForm onSubmit={handleSignUp} loading={loading} />
      </AuthCard>
    </AuthLayout>
  );
};

export default SignUpPage;
