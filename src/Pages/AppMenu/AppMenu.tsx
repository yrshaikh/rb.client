import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Authentication/Auth";
import "./AppMenu.scss";

interface IAppMenuProps {
  auth: Auth;
}

class AppMenu extends React.Component<IAppMenuProps, {}> {
  public render(): JSX.Element {
    return this.props.auth.isAuthenticated()
      ? this.renderAuthenticatedNavBar()
      : this.renderNavBar();
  }

  private renderNavBar(): JSX.Element {
    const { login } = this.props.auth;
    return (
      <Menu
        className="AppMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/features">Features</Link>
        </Menu.Item>
        <Menu.Item
          className="AppMenu__Item--right AppMenu__Item--callToAction"
          key="3"
        >
          <span className="AppMenu__Item--clickable" onClick={login}>
            Log In / Create an account
          </span>
        </Menu.Item>
      </Menu>
    );
  }
  private renderAuthenticatedNavBar(): JSX.Element {
    const { logout } = this.props.auth;
    return (
      <Menu
        className="AppMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item
          className="AppMenu__Item--right AppMenu__Item--callToAction"
          key="3"
        >
          <span className="AppMenu__Item--clickable" onClick={logout}>
            Log Out
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
