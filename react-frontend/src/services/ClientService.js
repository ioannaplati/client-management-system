import axios from 'axios';

const CLIENT_API_BASE_URL='http://localhost:8080/api/v1/clients';

class ClientService {
    getClients() {
        return axios.get(CLIENT_API_BASE_URL);
    };

    createClient(client) {
        return axios.post(CLIENT_API_BASE_URL, client);  
    };
}

// export a class object and NOT the class so it can be used directly inside a component
export default new ClientService();