import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

//Ahora que hemos instalado axios y configurado, con esta const se puede hacer peticiones http
export default apiClient;
