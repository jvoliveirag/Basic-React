import { FaCar } from 'react-icons/fa';
import { toast } from 'react-toastify';

import ClientCars from '../../services/carros';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ReadAll() {

    async function handleDelete(e) {
        e.preventDefault();

        const readAll = await ClientCars.listCar();
        console.log('readAll', readAll.data);
        if (readAll.status === 200) {
            toast.success('Veículos encontrado com sucesso!');
            //return readAll.data
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Consultar veículos">
                    <FaCar size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleDelete}>
                        <button type="submit">Consultar</button>
                    </form>
                </div>

                <div className="container">
                    <h1>
                        Veículos
                    </h1>
                </div>

            </div>
        </div>
    )
}