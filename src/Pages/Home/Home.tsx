import React from "react";
import Auth from "../Authentication/Auth";
import "./Home.scss";
import HomeApi from "./HomeApi";

interface IProps {
  auth: Auth;
}

interface IState {
  publicMessage: string;
  privateMessage: string;
}

class Home extends React.Component<IProps, IState> {
  private homeApi: HomeApi;

  constructor(props: IProps) {
    super(props);
    this.homeApi = new HomeApi();
    this.state = {
      privateMessage: "",
      publicMessage: ""
    };
  }

  public componentDidMount(): void {
    this.homeApi.GetPublicMessage().then((response: any) => {
      this.setState({ publicMessage: response });
    });

    if (!this.props.auth.isAuthenticated()) { return; }
    const accessToken: string = this.props.auth.getToken();
    this.homeApi.GetPrivateMessage(accessToken).then((response: any) => {
      this.setState({ privateMessage: response });
    });
  }

  public render(): JSX.Element {
    return (
      <>
        <h1>Home</h1>
        {this.renderMessages()}
      </>
    );
  }

  private renderMessages(): JSX.Element {
    const privateMessage: JSX.Element = this.props.auth.isAuthenticated() ? (
      <p>private message : {this.state.privateMessage}</p>
    ) : (
      <></>
    );
    return (
      <>
        <p>public message : {this.state.publicMessage}</p>
        {privateMessage}
      </>
    );
  }
}

export default Home;
