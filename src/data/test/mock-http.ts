import faker from "faker";
import {
    HttpPostParams,
    IHttpPostClient,
    HttpResponse,
    HttpStatusCode,
    HttpGetParams,
    IHttpGetClient,
} from "@/data/protocols/http";

export const mockPostRequest = (): HttpPostParams => ({
    url: faker.internet.url(),
    body: faker.random.objectElement(),
});

export const mockGetRequest = (): HttpGetParams => ({
    url: faker.internet.url(),
    headers: faker.random.objectElement(),
});

export class HttpPostClientSpy<R = any> implements IHttpPostClient<R> {
    url?: string;

    body?: any;

    response: HttpResponse<R> = {
        statusCode: HttpStatusCode.ok,
    };

    async post(params: HttpPostParams): Promise<HttpResponse<R>> {
        this.url = params.url;
        this.body = params.body;

        return Promise.resolve(this.response);
    }
}

export class HttpGetClientSpy<R = any> implements IHttpGetClient<R> {
    url: string;

    headers?: any;

    response: HttpResponse<R> = {
        statusCode: HttpStatusCode.ok,
    };

    async get(params: HttpGetParams): Promise<HttpResponse<R>> {
        this.url = params.url;
        this.headers = params.headers;

        return Promise.resolve(this.response);
    }
}
