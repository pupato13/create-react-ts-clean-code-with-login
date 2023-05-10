import { IHttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import {
    ForbiddenError,
    InvalidCredentialsError,
    UnexpectedError,
} from "@/domain/errors";
import { IAuthentication } from "@/domain/usecases";
import { ErrorModel } from "@/domain/models";

export class RemoteAuthentication implements IAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: IHttpPostClient<IAuthentication.Model>,
    ) {}

    async auth(params: IAuthentication.Params): Promise<IAuthentication.Model> {
        const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params,
        });

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body;
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError();
            case HttpStatusCode.forbidden:
                // eslint-disable-next-line no-case-declarations
                const errorRes = httpResponse.body as unknown as ErrorModel;
                throw new ForbiddenError(errorRes.error);
            default:
                throw new UnexpectedError();
        }
    }
}

export namespace RemoteAuthentication {
    export type Model = IAuthentication.Model;
}
