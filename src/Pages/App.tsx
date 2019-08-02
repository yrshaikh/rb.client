import { Layout } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./AntOverrides.scss";
import "./App.scss";
import AppMenu from "./AppMenu/AppMenu";
import Auth from "./Authentication/Auth";
import Callback from "./Authentication/Callback";
import PageNotFound from "./Common/PageNotFound/PageNotFound";
import Features from "./Features/Features";
// components to be routed
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

const { Header, Content } = Layout;

interface IAppProps {
  location: {
    pathname: string;
    hash: string;
  };
  history: History;
}

class App extends React.Component<IAppProps, {}> {
  private readonly auth: Auth;
  constructor(props: IAppProps) {
    super(props);
    this.auth = new Auth(this.props.history as History);
  }
  public render() {
    const CommonHeader = (
      <Header className="AppLayout__Header">
        <div className="AppLayout__Logo" />
        <AppMenu auth={this.auth} />
      </Header>
    );
    return (
      <Layout className="AppLayout">
        {CommonHeader}
        <Content className="AppLayout__Content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/features" render={() => <Features />} />
            <Route
              path="/profile"
              render={() => <Profile auth={this.auth} />}
            />
            <Route path="/pagenotfound" render={() => <PageNotFound />} />
            <Route
              path="/callback"
              render={() => <Callback urlHash={this.props.location.hash} auth={this.auth} />}
            />
            <Redirect from="/**" to="/pagenotfound" />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
