import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Dashboard from './pages/Dashboard.jsx'
// import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dashboard /> */}
    {/* <SignUp /> */}
    <SignIn />
  </StrictMode>,
)
