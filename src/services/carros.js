import client from './config';

const userPath = '/user';

const ClientCars = {
    async createCar(data) {
        try {
            console.log(data)
            const response = await client.post(`${userPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async listCar() {
        try {
            const response = await client.get(`${userPath}/list`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listByPlaca(data) {
        try {
            const response = await client.patch(`${userPath}/listCarro`, data.placa);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientCars;