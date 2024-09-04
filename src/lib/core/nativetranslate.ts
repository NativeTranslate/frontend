import { API } from '@/lib/core/api/api.ts';
import { GraphQLAPI } from '@/lib/core/api/graphql.ts';

const api: API = new GraphQLAPI();

export class NativeTranslate {
    static getAPI(): API {
        return api;
    }
}
