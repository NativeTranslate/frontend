import { APIProject, APIStats } from '@/lib/core/api/types';

export class API {
    async getStats(): Promise<APIStats> {
        console.log('API: getStats');
        return undefined as any;
    }

    async getProjects(): Promise<APIProject> {
        console.log('API: getProjects');
        return undefined as any;
    }

    async getProject(_id: number): Promise<APIProject> {
        console.log('API: getProject');
        return undefined as any;
    }

    async auth(_email: string, _password: string): Promise<void> {
        console.log('API: auth');
    }

    async getUsers() {
        console.log('API: getUsers');
        return undefined as any;
    }

    async getSettings() {
        console.log('API: getSettings');
        return undefined as any;
    }

    async updateSettings(_key: string, _value: string) {
        console.log('API: updateSettings');
        return undefined as any;
    }

    async sendResetPasswordEmail(_email: string) {
        console.log('API: sendResetPasswordEmail');
        return undefined as any;
    }

    async resetPassword(_token: string, _password: string) {
        console.log('API: resetPassword');
        return undefined as any;
    }
}
