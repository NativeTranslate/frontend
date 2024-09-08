import { APIStats } from '@/lib/core/api/types';

export class API {
    async getStats(): Promise<APIStats> {
        console.log('API: getStats');
        return undefined as any;
    }

    async auth(_email: string, _password: string): Promise<void> {
        console.log('API: auth');
    }
}
