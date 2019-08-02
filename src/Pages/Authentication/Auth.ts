import auth0, { Auth0DecodedHash, WebAuth } from "auth0-js";

export default class Auth {
  public static init(history: History) {
    Auth.historyField = history;
    Auth.authField = new auth0.WebAuth({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
      domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile email"
    });
    Auth.userProfile = null;
  }

  public static login() {
    Auth.authField.authorize();
  }

  public static logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    Auth.userProfile = null;
    Auth.authField.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000"
    });
  }

  public static isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at") as string);
    return new Date().getTime() < expiresAt;
  }

  public static handleAuthentication() {
    Auth.authField.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        Auth.setSession(authResult);
        Auth.historyField.push("/");
      } else if (err) {
        Auth.historyField.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        // console.log(err);
      }
    });
  }

  public static setSession(authResult: Auth0DecodedHash) {
    // console.log(authResult);
    // set the time that the access token will expire
    const expiresAt = JSON.stringify(
      (authResult.expiresIn as number) * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken as string);
    localStorage.setItem("id_token", authResult.idToken as string);
    localStorage.setItem("expires_at", expiresAt);
  }

  public static getAccessToken(): string {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    return accessToken;
  }

  // tslint:disable-next-line:no-any
  public static getProfile(cb: any): void {
    if (Auth.userProfile) {
      return cb(Auth.userProfile);
    }
    Auth.authField.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) {
        Auth.userProfile = profile;
      }
      cb(profile, err);
    });
  }

  // tslint:disable-next-line:no-any
  private static historyField: any;
  private static authField: WebAuth;
  // tslint:disable-next-line:no-any
  private static userProfile: any;
}
