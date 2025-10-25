import { useState } from 'react';
import { message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import AuthLayout from '../components/organisms/AuthLayout';
import AuthCard from '../components/organisms/AuthCard';
import ResetPasswordForm from '../components/molecules/ResetPasswordForm';

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (formData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Reset password data:', formData);
      message.success('Link reset password telah dikirim ke email Anda!');
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Reset Password"
        subtitle="Atur ulang password akun Anda"
        icon={LockOutlined}
      >
        <ResetPasswordForm onSubmit={handleResetPassword} loading={loading} />
      </AuthCard>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
