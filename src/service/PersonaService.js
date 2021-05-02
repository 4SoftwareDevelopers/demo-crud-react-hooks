import axios from 'axios';

export class PersonaService {
    baseUrl = "http://localhost:9000/persona/api/";

    getAll() {
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }
}