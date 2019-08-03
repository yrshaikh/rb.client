import { Icon, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Authentication/Auth";
import "./AppMenu.scss";

const { SubMenu } = Menu;

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
          onClick={login}
        >
          Log In / Create an account
        </Menu.Item>
      </Menu>
    );
  }
  private renderAuthenticatedNavBar(): JSX.Element {
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
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        {this.renderDropDownMenu()}
      </Menu>
    );
  }

  private renderDropDownMenu(): JSX.Element {
    const { logout } = this.props.auth;
    return (
      <SubMenu
        className="AppMenu__Item--right"
        title={
          <span className="">
            <Icon type="user" /> Yasser Shaikh
          </span>
        }
      >
        <Menu.Item key="setting:1">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="setting:2" onClick={logout}>
          Log Out
        </Menu.Item>
      </SubMenu>
    );
  }
}

export default AppMenu;
