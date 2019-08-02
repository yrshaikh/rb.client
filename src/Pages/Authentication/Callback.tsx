import React, { Component } from "react";
import AuthV2 from "../Authentication/Auth";

interface IProps {
  urlHash: string;
}

class Callback extends Component<IProps> {
  public componentDidMount() {
    if (/access_token|id_token|error/.test(this.props.urlHash)) {
      AuthV2.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }

  public render() {
    return <div>Authenticating...</div>;
  }
}

export default Callback;
