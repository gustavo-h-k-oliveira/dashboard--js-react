import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="logo">
                <p>SMART<br/><strong>GROW</strong></p>
            </div>
            <nav className="nav">
                <a href='' className="nav-link">Dashboard</a>
                <a className="nav-link">Painel de Controle</a>
                <a className="nav-link">Histórico de Dados</a>
                <a className="nav-link">Relatório</a>
            </nav>
        </>
    )
}