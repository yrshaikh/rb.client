import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Authentication/Auth";
import "./AppMenu.scss";

interface IAppMenuProps {
  isAuthenticated: boolean;
}

class AppMenu extends React.Component<IAppMenuProps, {}> {
  public render() {
    const selectedMenu = ["1"];

    const renderLoginButton = (
      <Menu.Item
        className="AppMenu__Item--right AppMenu__Item--callToAction"
        key="3"
      >
        <span onClick={Auth.login}>Log In</span>
      </Menu.Item>
    );

    const renderAccountSettings = (
      <Menu.Item className="AppMenu__Item--right" key="99">
        <Link to="/profile">Account Settings</Link>
      </Menu.Item>
    );

    return (
      <Menu
        className="AppMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={selectedMenu}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/features">Features</Link>
        </Menu.Item>
        {this.props.isAuthenticated ? renderAccountSettings : renderLoginButton}
      </Menu>
    );
  }
}

export default AppMenu;
