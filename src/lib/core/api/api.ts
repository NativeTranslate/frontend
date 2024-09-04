import { APIStats } from '@/lib/core/api/types';

export class API {
    async getStats(): Promise<APIStats> {
        console.log('API: getStats');
        return undefined as any;
    }
}
