import React, { useState } from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  // @ts-ignore
  const navigate = useNavigate();
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

  // @ts-ignore
  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
      setGoogleLoginLoading(true);
      setGoogleLoginLoading(false);
  };

  return (
    <div className="form-container">
      { googleLoginLoading ? 
            <>Loading...</> :  
            <button>Google Login</button>
       }
    </div>
  );
};

export default Login;
