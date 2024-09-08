import { API } from '@/lib/core/api/api.ts';
import { RestAPI } from '@/lib/core/api/restapi.ts';

const api: API = new RestAPI();

export class NativeTranslate {
    static getAPI(): API {
        return api;
    }
}
