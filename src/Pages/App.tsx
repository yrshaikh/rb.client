import { Layout } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./AntOverrides.scss";
import "./App.scss";
import AppMenu from "./AppMenu/AppMenu";
import Auth from "./Authentication/Auth";
import Callback from "./Authentication/Callback";
import PageNotFound from "./Common/PageNotFound/PageNotFound";
import Dashboard from "./Dashboard/Dashboard";
import Features from "./Features/Features";
// components to be routed
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import ResumePage from "./Resume/ResumePage";

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
  public render(): JSX.Element {
    const CommonHeader: JSX.Element = (
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
            <Route
              exact
              path="/"
              render={(): JSX.Element => <Home auth={this.auth} />}
            />
            <Route path="/features" render={(): JSX.Element => <Features />} />
            <Route
              path="/profile"
              render={(): JSX.Element => <Profile auth={this.auth} />}
            />
            <Route
              path="/dashboard"
              render={(): JSX.Element => <Dashboard />}
            />
            <Route
              path="/pagenotfound"
              render={(): JSX.Element => <PageNotFound />}
            />
            <Route
              path="/callback"
              render={(): JSX.Element => (
                <Callback urlHash={this.props.location.hash} auth={this.auth} />
              )}
            />
            <Route
              path="/resume/edit"
              render={(): JSX.Element => (
                <ResumePage />
              )}
            />
            <Redirect from="/**" to="/pagenotfound" />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
