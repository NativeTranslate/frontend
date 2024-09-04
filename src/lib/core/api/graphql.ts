import { API } from '@/lib/core/api/api.ts';
import axios from 'axios';
import { APIStats } from '@/lib/core/api/types';

export class GraphQLAPI extends API {
    async getStats(): Promise<APIStats> {
        const response = await axios.post('/query', {
            query: `
                query {
                    stats {
                        users
                        organizations
                        projects
                        translations
                    }
                }
            `,
        });

        return response.data.data.stats;
    }
}
