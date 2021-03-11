import { Mongo } from '../../lib/mongo';

export class ApiKeysService{
    constructor(){
        this.collection = 'ApiKeys';
        this.mongoService = new Mongo();
    }

    async get(token){
        const existanceToken = await this.mongoService.get(this.collection, token);
        return existanceToken; 
    }
}