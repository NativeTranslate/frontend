import { API } from '@/lib/core/api/api.ts';
import axios from 'axios';
import { APIStats } from '@/lib/core/api/types';

export class RestAPI extends API {
    async getStats(): Promise<APIStats> {
        const response = await axios.get('/api/stats');
        console.log(response);

        return response.data;
    }

    async auth(email: string, password: string): Promise<void> {
        const response = await axios.post('/auth/login', {
            email,
            password,
        });
        console.log(response);
    }
}
