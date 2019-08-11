import { Drawer } from "antd";
import React, { Component } from "react";
import "./ResumePageDrawer.scss";

export default class ResumePageDrawer extends Component {
  public render(): JSX.Element {
    return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        visible={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}
