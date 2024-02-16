import React, { useEffect, useState } from 'react';
import { BackendService } from "@genezio-sdk/genezio-auth-tutorial_us-east-1"
import { useNavigate } from 'react-router-dom';

const SecretView: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const navigate = useNavigate();
  // @ts-ignore
  const [secret, setSecret] = useState('');
  // @ts-ignore
  const [name, setName] = useState('');
  // @ts-ignore
  const [email, setEmail] = useState('');

  useEffect(() => {
      if (name && email) {
          return;
      }

  }, []);

  const logout = async () => {
  }

  // Function to fetch the secret
  const fetchSecret = async () => {
      setLoading(true);
      try {
        const secret = await BackendService.getSecret();
        setSecret(secret);
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
      setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Your details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={fetchSecret}>{ loading ? "Loading..." : "Reveal Secret" }</button>
      <button onClick={logout}>Logout</button>
      {secret && <p>{secret}</p>}
    </div>
  );
};

export default SecretView;