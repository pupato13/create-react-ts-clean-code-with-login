import { RemoteAuthentication } from "@/data/usecases/authentication/remote-authentication";
import { IAuthentication } from "@/domain/usecases";
import { makeAxiosHttpClient } from "@/main/factories/http/axios-http-client-factory";
import { makeApiUrl } from "@/main/factories/http/api-url-factory";

export const makeRemoteAuthentication = (): IAuthentication => {
    return new RemoteAuthentication(
        makeApiUrl("/login"),
        makeAxiosHttpClient(),
    );
};
