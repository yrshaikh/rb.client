export interface IAuthenticationRepository {
    IsValid(email: string, password: string): Promise<boolean>;
}
