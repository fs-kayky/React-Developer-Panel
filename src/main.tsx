import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// PROMOVE OS METODOS DA LIB PARA TODA A MINHA APLICAÇÃO
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from './shared/contexts/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
