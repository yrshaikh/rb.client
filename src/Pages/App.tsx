import {Layout} from "antd";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import "./AntOverrides.scss";
import "./App.scss";
import AppMenu from "./AppMenu/AppMenu";
import Authentication from "./Authentication/Authentication";
import PageNotFound from "./Common/PageNotFound/PageNotFound";
import Features from "./Features/Features";
// components to be routed
import Home from "./Home/Home";

const {Header, Content} = Layout;

interface IAppProps {
    location?: {
        pathname: string,
    };
}

class App extends React.Component<IAppProps, any> {
    public render() {
        const HeaderLayout = (
            <Header>
                <div className="AppLayout__Logo"/>
                <AppMenu/>
            </Header>
        );

        const path = this.props.location != null ? this.props.location.pathname : "";

        return (
            <Layout className="AppLayout">
                {(path !== "/entry") ? HeaderLayout : null}
                <Content className="AppLayout__Content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props: IAppProps) => <Home {...props} />}
                        />
                        <Route
                            path="/authentication"
                            render={(props: IAppProps) => <Authentication {...props} />}
                        />
                        <Route
                            path="/features"
                            render={(props: IAppProps) => <Features {...props} />}
                        />
                        <Route
                            path="/pagenotfound"
                            render={(props: IAppProps) => <PageNotFound {...props} />}
                        />
                        <Redirect
                            from="/**"
                            to="/pagenotfound"
                        />
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default App;
