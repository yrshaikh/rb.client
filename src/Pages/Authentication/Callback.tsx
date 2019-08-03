import React, { Component } from "react";
import Auth from "../Authentication/Auth";

interface IProps {
  urlHash: string;
  auth: Auth;
}

class Callback extends Component<IProps> {
  public componentDidMount(): void {
    if (/access_token|id_token|error/.test(this.props.urlHash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }

  public render(): JSX.Element {
    return <div>Authenticating...</div>;
  }
}

export default Callback;
