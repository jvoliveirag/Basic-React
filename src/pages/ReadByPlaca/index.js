import { FaCar } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientCars from '../../services/carros';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function List() {

    const [placa, setPlaca] = useState('');

    async function handleDelete(e) {
        e.preventDefault();

        const data = {
            placa: placa,
        }

        const update = await ClientCars.listByPlaca(data);
        console.log('update', update);
        if (update.status === 200) {
            toast.success('Veículo encontrado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Consultar veículo">
                    <FaCar size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleDelete}>

                        <label>Placa</label>
                        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />

                        <button type="submit">Consultar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}