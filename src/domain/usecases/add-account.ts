import { AccountModel } from "@/domain/models";

export interface IAddAccount {
    add(params: IAddAccount.Params): Promise<IAddAccount.Model>;
}

export namespace IAddAccount {
    export type Params = {
        name: string;
        timeCartolaId: number;
        estado: string;
        email: string;
        password: string;
        passwordConfirmation: string;
    };

    export type Model = AccountModel;
}
