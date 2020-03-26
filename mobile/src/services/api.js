import axios from 'axios';

const api = axios.create({
	//Para rodar na rede (IP da máquina):
	//baseURL: 'http://192.168.1.33:3333'
	
	//Para rodar no Expo:
    baseURL: 'http://192.168.1.33:19000'
});

export default api;