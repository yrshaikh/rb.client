import {AuthenticationRepository} from "../Repositories/AuthenticationRepository";
import {IAuthenticationRepository} from "../Repositories/IAuthenticationRepository";
import {MockAuthenticationRepository} from "../Repositories/MockAuthenticationRepository";

export class RepositoryFactory {
    private readonly isMockModeEnabled: boolean;
    constructor() {
        this.isMockModeEnabled = true;
    }

    public GetAuthenticationRepository(): IAuthenticationRepository {
        return this.isMockModeEnabled ? new MockAuthenticationRepository() : new AuthenticationRepository();
    }
}
