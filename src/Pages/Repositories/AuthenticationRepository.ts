import {IAuthenticationRepository} from "./IAuthenticationRepository";

export class AuthenticationRepository implements IAuthenticationRepository {

    public IsValid(email: string, password: string): Promise<boolean> {
        throw new Error("not implemented");
    }

}
