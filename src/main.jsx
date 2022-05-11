import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './Context';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
