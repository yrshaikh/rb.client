import {IAuthenticationRepository} from "../../Repositories/IAuthenticationRepository";

export class AuthenticationService {
    private readonly authenticationRepository: IAuthenticationRepository;

    constructor() {
        this.authenticationRepository = new AuthenticationService();
    }

    public IsValid(email: string, password: string): Promise<boolean> {
        return this.authenticationRepository.IsValid(email, password);
    }
}
