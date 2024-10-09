import { Link } from "react-router-dom";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
        <h1 className="font-bold text-3xl">Sistema de Controle de Doação de Sangue</h1>
      
        <ul>
          <li>
            <Link to="/states">Estados</Link>
          </li>
          <li>
          <Link to="/cities">Cidades</Link>
          </li>
          <li>
          <Link to="/persons">Pessoas</Link>
          </li>
          <li>
          <Link to="/donations">Doações</Link>
          </li>
          <li>
          <Link to="/locals">Locais de Coleta</Link>
          </li>
          <li>
          <Link to="/types">Tipo Sanguineo</Link>
          </li>
        </ul>
      </main>
    );
  }