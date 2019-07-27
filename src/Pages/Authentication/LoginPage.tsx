import BaseAuthentication from "./BaseAuthentication";

class LoginPage extends BaseAuthentication {

    public render() {
        return (
            this.renderForm()
        );
    }

    protected GetButtonText(): string {
        return "Login";
    }

    protected ShouldShowFullNameField(): boolean {
        return false;
    }

    protected GetDescriptionText(): string {
        return "Enter your username and password to continue...";
    }

    protected GetHeaderText(): string {
        return "Welcome back!";
    }
}

export default LoginPage;
