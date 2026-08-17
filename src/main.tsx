import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import PruebaConIA from './PruebaConIA.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PruebaConIA></PruebaConIA>
  </StrictMode>,
)
