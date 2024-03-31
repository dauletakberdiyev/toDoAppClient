import { AxiosInstance } from "axios";
import { BaseResponse } from "../types/BaseResponse";
import { APIResponse } from "../types/ApiResponse";

export class StatusService {
    constructor(
        private httpClient: AxiosInstance 
    ) {}
    
    async getAllStatuses(): Promise<APIResponse> {
        try {
            const { data } = await this.httpClient.get<BaseResponse>('/status')

            return [null, data]
        }
        catch (error) {
            console.error(error)

            return [Error()]
        }
    }
}