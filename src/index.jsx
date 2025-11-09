import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// ⚠️ CRITICAL: Import global styles FIRST before any components


// Import contexts
import { AuthProvider } from './contexts/AuthContext.jsx';
import { SocketProvider } from './contexts/SocketContext.jsx';
import { VideoCallProvider } from './contexts/VideoCallContext.jsx';

// Import main App component AFTER styles
import App from './App.jsx';

// Get Google Client ID from environment variables
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Ensure the client ID exists
if (!GOOGLE_CLIENT_ID) {
  console.error('⚠️ Google Client ID is not configured. Please check your .env file.');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <SocketProvider>
            <VideoCallProvider>
              <App />
            </VideoCallProvider>
          </SocketProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)