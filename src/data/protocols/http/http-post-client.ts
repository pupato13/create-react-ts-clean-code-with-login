import { HttpResponse } from "@/data/protocols/http";

export type HttpPostParams = {
    url: string;
    body?: any;
};

export interface IHttpPostClient<R = any> {
    post(params: HttpPostParams): Promise<HttpResponse<R>>;
}
