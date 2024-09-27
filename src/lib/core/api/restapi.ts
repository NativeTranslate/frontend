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

    async getUsers(): Promise<any> {
        const response = await axios.get('/api/users');
        return response.data;
    }

    async auth(email: string, password: string): Promise<void> {
        const response = await axios.post('/auth/login', {
            email,
            password,
        });
        console.log(response);
    }

    async getSettings(): Promise<any> {
        const response = await axios.get('/api/users/me/settings', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

        return response.data;
    }

    async updateSettings(key: string, value: string): Promise<any> {
        const response = await axios.post(
            '/api/users/me/settings',
            {
                key,
                value,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            },
        );

        return response.data;
    }

    // localhost:8080/api/users/me/settings

    async sendResetPasswordEmail(email: string): Promise<void> {
        const response = await axios.post('/auth/reset-password', {
            email,
        });

        return response.data;
    }

    async resetPassword(token: string, password: string): Promise<void> {
        const response = await axios.post('/auth/reset-password-confirm', {
            token: token,
            password: password,
        });

        return response.data;
    }
}
