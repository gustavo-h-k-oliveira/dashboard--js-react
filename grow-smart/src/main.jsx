import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Dashboard from './pages/Dashboard.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn'
import Settings from './pages/Settings.jsx'
import AuthLayout from './pages/Layout/AuthLayout.jsx'
import BenchLayout from './pages/Layout/BenchLayout.jsx'
import Bench from './pages/Bench.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
                
        <Route element={<AuthLayout/>}>
          <Route path='login' element={<SignIn/>} />
          <Route path='register' element={<SignUp/>} />
        </Route>

        <Route element={<BenchLayout/>}>
          <Route path=':id' element={<Bench/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
