import axios from 'axios'
import { Coffee } from '../types'

export class ApiService {

    public static async getCoffees(): Promise<any> {
        const response = await axios.get('/api/coffee');
        return response.data;
    }

    public static async addCoffee(coffee: Coffee) {
        const response = await axios.post(`/api/coffee`, {
            ...coffee
        })
        return response.data;
    }

}