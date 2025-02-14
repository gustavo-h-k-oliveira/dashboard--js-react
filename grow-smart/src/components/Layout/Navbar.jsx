import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <p>SMART<br/><span>GROW</span></p>
            </div>
            
            <NavLink to='/' end activeClassName="active">
                Dashboard
            </NavLink>
            <NavLink to='/historic' activeClassName="active">
                Histórico de Dados
            </NavLink>
            <NavLink to='/control' activeClassName="active">
                Painel de Controle
            </NavLink>
            <NavLink to='/report' activeClassName="active">
                Relatório
            </NavLink>
        </nav>
    )
}