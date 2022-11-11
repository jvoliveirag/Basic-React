import { FaCar } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientCars from '../../services/carros';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Create() {

    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');

    async function handleSave(e) {
        e.preventDefault();

        const data = {
            placa: placa,
            modelo: modelo,
            marca: marca,
        }

        const update = await ClientCars.createCar(data);
        if (update.status === 200) {
            toast.success('Veículo cadastrado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Registrar novo veículo">
                    <FaCar size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>
                        
                        <label>Modelo</label>
                        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />

                        <label>Placa</label>
                        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />

                        <label>Marca</label>
                        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />

                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}