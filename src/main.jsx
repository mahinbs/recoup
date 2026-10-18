import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SiteContentProvider } from './context/SiteContentContext.jsx'
import { AdminAuthProvider } from './context/AdminAuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminAuthProvider>
      <SiteContentProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SiteContentProvider>
    </AdminAuthProvider>
  </StrictMode>,
)
