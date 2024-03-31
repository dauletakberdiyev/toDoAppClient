import { AxiosInstance } from "axios";

export abstract class BaseService {
    constructor (
        httpClient: AxiosInstance,
        response: Response
    ) {}
}