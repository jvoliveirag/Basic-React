import { Link } from 'react-router-dom';
import { FaPlusCircle, FaSearch, FaList } from "react-icons/fa";

import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">
                <FaPlusCircle color="white" size={24} />
                Inserir novo veículo
            </Link>
            <Link to="/Read">
                <FaList color="white" size={24} />
                Ver todos os veículos
            </Link>
            <Link to="/ReadByPlaca">
                <FaSearch color="white" size={24} />
                Consultar veículo por placa
            </Link>
        </div>
    )
}