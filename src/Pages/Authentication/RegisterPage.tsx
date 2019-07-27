import BaseAuthentication from "./BaseAuthentication";

class RegisterPage extends BaseAuthentication {
    public render() {
        return (
            this.renderForm()
        );
    }

    protected GetButtonText(): string {
        return "Register";
    }

    protected ShouldShowFullNameField(): boolean {
        return true;
    }

    protected GetDescriptionText(): string {
        return "It will only take a second...";
    }

    protected GetHeaderText(): string {
        return "Create an account";
    }
}

export default RegisterPage;
