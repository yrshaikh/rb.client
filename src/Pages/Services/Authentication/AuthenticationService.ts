import {IAuthenticationRepository} from "../../Repositories/IAuthenticationRepository";
import {RepositoryFactory} from "../RepositoryFactory";

export class AuthenticationService {

    private readonly repositoryFactory: RepositoryFactory;
    private readonly authenticationRepository: IAuthenticationRepository;

    constructor() {
        this.repositoryFactory = new RepositoryFactory();
        this.authenticationRepository = this.repositoryFactory.GetAuthenticationRepository();
    }

    public IsValid(email: string, password: string): Promise<boolean> {
        return this.authenticationRepository.IsValid(email, password);
    }
}
