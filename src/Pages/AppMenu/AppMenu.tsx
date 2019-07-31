import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AuthV2 from "../Authentication/Auth";
import "./AppMenu.scss";

interface IAppMenuProps {
}

class AppMenu extends React.Component<IAppMenuProps, {}> {
  public render() {
    const selectedMenu = ["1"];
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
        <Menu.Item
          className="AppMenu__Item--right AppMenu__Item--callToAction"
          key="3"
        >
          {AuthV2.isAuthenticated() ? (
            <Link to="/">Hola!</Link>
          ) : (
            <span onClick={AuthV2.login}>Log In</span>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
