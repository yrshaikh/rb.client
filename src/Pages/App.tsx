import { Layout } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./AntOverrides.scss";
import "./App.scss";
import AppMenu from "./AppMenu/AppMenu";
import AuthV2 from "./Authentication/Auth";
import Callback from "./Authentication/Callback";
import PageNotFound from "./Common/PageNotFound/PageNotFound";
import Features from "./Features/Features";
// components to be routed
import Home from "./Home/Home";

const { Header, Content } = Layout;

interface IAppProps {
  location: {
    pathname: string;
    hash: string;
  };
  history: History;
}

class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
    AuthV2.init(this.props.history as History);
  }
  public render() {
    const HeaderLayout = (
      <Header className="AppLayout__Header">
        <div className="AppLayout__Logo" />
        <AppMenu />
      </Header>
    );

    const path =
      this.props.location != null ? this.props.location.pathname : "";

    return (
      <Layout className="AppLayout">
        {path !== "/authentication" ? HeaderLayout : null}
        <Content className="AppLayout__Content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/features" render={() => <Features />} />
            <Route path="/pagenotfound" render={() => <PageNotFound />} />
            <Route path="/callback" render={() => <Callback urlHash={this.props.location.hash} />} />
            <Redirect from="/**" to="/pagenotfound" />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
