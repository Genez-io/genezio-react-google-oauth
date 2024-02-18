import React, { useState } from 'react';
import { BackendService } from "@genezio-sdk/genezio-google-oauth-tutorial_us-east-1"
import { useNavigate } from 'react-router-dom';

const SecretView: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const navigate = useNavigate();
  // @ts-ignore
  const [secret, setSecret] = useState('');

  const logout = async () => {
  }

  // Function to fetch the secret
  const fetchSecret = async () => {
      setLoading(true);
      try {
        const secret = await BackendService.getSecret();
        setSecret(secret);
      } catch (error) {
        alert("You are not allowed to see the secret. Login first.");
        console.error(error);
        navigate('/login');
      }
      setLoading(false);
  };

  return (
    <div className="form-container">
      {secret ? <p>{secret}</p> : <p></p>}
      <button onClick={fetchSecret}>{ loading ? "Loading..." : "Reveal Secret" }</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default SecretView;
