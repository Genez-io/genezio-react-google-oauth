import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SecretView from './routes/secret';
import Login from './routes/login';
// 1
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthService } from '@genezio/auth';

// 2
AuthService.getInstance().setTokenAndRegion("0-cmvnmyiv32xlqcnjp6ce6s3gxq0aypdc", "us-east-1");

const router = createBrowserRouter([
  {
    path: "/",
    element: <SecretView />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

// 3 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="876221639278-bolsnkebpdaptcsop1p507eb096bdhes.apps.googleusercontent.com">
      <RouterProvider router={router} />
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
