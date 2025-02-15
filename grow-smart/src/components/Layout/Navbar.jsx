import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <p>SMART<br/><span>GROW</span></p>
            </div>
            <NavLink to='/' end className={({ isActive }) => isActive ? "active" : ""}>
                Dashboard
            </NavLink>
            <NavLink to='/historic' className={({ isActive }) => isActive ? "active" : ""}>
                Histórico de Dados
            </NavLink>
            <NavLink to='/control' className={({ isActive }) => isActive ? "active" : ""}>
                Painel de Controle
            </NavLink>
            <NavLink to='/report' className={({ isActive }) => isActive ? "active" : ""}>
                Relatório
            </NavLink>
        </nav>
    )
}