import { AccountModel } from "@/domain/models";

export interface IAuthentication {
    auth(params: IAuthentication.Params): Promise<IAuthentication.Model>;
}

export namespace IAuthentication {
    export type Params = {
        email: string;
        password: string;
    };

    export type Model = AccountModel;
}
