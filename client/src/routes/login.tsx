import React, { useState } from 'react';
// 1
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { AuthService } from '@genezio/auth';
import "./styles.css";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  // 2
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

  // 3
  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
      setGoogleLoginLoading(true);
      try {
        await AuthService.getInstance().googleRegistration(credentialResponse.credential!)

        console.log('Login Success');
        navigate('/');
      } catch(error: any) {
        console.log('Login Failed', error);
        alert('Login Failed');
      }

      setGoogleLoginLoading(false);
  };

  // 4
  return (
    <>
      { googleLoginLoading ? 
            <>Loading...</> :  
            <GoogleLogin
                onSuccess={credentialResponse => {
                    handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                    alert('Login Failed')
                }}
            />
       }
    </>
  );
};

export default Login;
