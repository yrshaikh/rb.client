import {IAuthenticationRepository} from "./IAuthenticationRepository";

export class MockAuthenticationRepository implements IAuthenticationRepository {

    public IsValid(email: string, password: string): Promise<boolean> {
        const result = email === "yrshaikh.mail@gmail.com" && password === "1234";
        return new Promise<boolean>((resolve) => resolve(result));
    }

}
