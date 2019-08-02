import auth0, { Auth0DecodedHash, WebAuth } from "auth0-js";

export default class Auth {
  private static authField: WebAuth;
  // tslint:disable-next-line:no-any
  private historyField: any;
  // tslint:disable-next-line:no-any
  private userProfile: any;
  public constructor(history: History) {
    this.historyField = history;
    Auth.authField = new auth0.WebAuth({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
      domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: "token id_token",
      scope: "openid profile email"
    });
    this.userProfile = null;
  }

  public login() {
    Auth.authField.authorize();
  }

  public logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // this.userProfile = null;
    Auth.authField.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: "http://localhost:3000"
    });
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at") as string);
    return new Date().getTime() < expiresAt;
  }

  public handleAuthentication() {
    Auth.authField.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.historyField.push("/");
      } else if (err) {
        this.historyField.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        // console.log(err);
      }
    });
  }

  public setSession(authResult: Auth0DecodedHash) {
    // console.log(authResult);
    // set the time that the access token will expire
    const expiresAt = JSON.stringify(
      (authResult.expiresIn as number) * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken as string);
    localStorage.setItem("id_token", authResult.idToken as string);
    localStorage.setItem("expires_at", expiresAt);
  }

  public getAccessToken(): string {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    return accessToken;
  }

  // tslint:disable-next-line:no-any
  public getProfile(callback: any): void {
    if (this.userProfile) {
      return callback(null, this.userProfile);
    }
    Auth.authField.client.userInfo(this.getAccessToken(), (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      callback(err, profile);
    });
  }
}
