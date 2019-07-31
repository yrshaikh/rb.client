import auth0, { Auth0DecodedHash, WebAuth } from "auth0-js";

export default class AuthV2 {
  public static setSession(authResult: Auth0DecodedHash) {
    // tslint:disable-next-line:no-console
    console.log(authResult);
    // set the time that the access token will expire
    const expiresAt = JSON.stringify(
      (authResult.expiresIn as number) * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken as string);
    localStorage.setItem("id_token", authResult.idToken as string);
    localStorage.setItem("expires_at", expiresAt);
  }

  public static init(history: History) {
    AuthV2.historyField = history;
    AuthV2.authField = new auth0.WebAuth({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
      domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  public static login() {
    AuthV2.authField.authorize();
  }

  public static isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at") as string);
    return new Date().getTime() < expiresAt;
  }

  public static handleAuthentication() {
    AuthV2.authField.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        AuthV2.setSession(authResult);
        AuthV2.historyField.push("/");
      } else if (err) {
        AuthV2.historyField.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        // tslint:disable-next-line:no-console
        console.log(err);
      }
    });
  }

  // tslint:disable-next-line:no-any
  private static historyField: any;
  private static authField: WebAuth;
}
