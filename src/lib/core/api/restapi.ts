import { API } from '@/lib/core/api/api.ts';
import axios from 'axios';
import { APIProject, APIStats } from '@/lib/core/api/types';

export class RestAPI extends API {
    async getStats(): Promise<APIStats> {
        const response = await axios.get('/api/stats');
        return response.data;
    }

    async getProjects(): Promise<APIProject> {
        const response = await axios.get('/api/projects');
        return response.data;
    }

    async getProject(id: number): Promise<APIProject> {
        const response = await axios.get('/api/projects/' + id);
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
