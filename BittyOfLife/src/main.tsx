import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/navbar' 
import Subscribe from './components/subscribe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header>
     <Navbar />
    </header>
    <main>
    <App />
    <Subscribe />
    </main>
    <footer></footer>
  </StrictMode>,
)
