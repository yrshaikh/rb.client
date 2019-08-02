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
        {this.renderAuthenticationButtons()}
      </Menu>
    );
  }
  private renderAuthenticationButtons(): JSX.Element {
    return (
      <>
        <Menu.Item
          className="AppMenu__Item--right AppMenu__Item--callToAction"
          key="3"
        >
          <span onClick={Auth.isAuthenticated() ? Auth.logout : Auth.login}>
            {Auth.isAuthenticated() ? "Log Out" : "Log In"}{" "}
          </span>
        </Menu.Item>
        {this.renderProfileLink()}
      </>
    );
  }

  private renderProfileLink(): JSX.Element {
    if (!Auth.isAuthenticated()) {
      return <></>;
    }
    return (
      <Menu.Item className="AppMenu__Item--right" key="99">
        <Link to="/profile">Account Settings</Link>
      </Menu.Item>
    );
  }
}

export default AppMenu;
