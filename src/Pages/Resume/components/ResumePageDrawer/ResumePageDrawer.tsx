import { Drawer } from "antd";
import React, { Component } from "react";
import { IResumePageDrawerProps } from "../../types/IResumePageDrawerProps";
import "./ResumePageDrawer.scss";

export default class ResumePageDrawer extends Component<
  IResumePageDrawerProps,
  {}
> {
  public render(): JSX.Element {
    return (
      <Drawer
        title={this.props.title}
        placement="right"
        closable={true}
        onClose={this.props.onClose}
        visible={this.props.visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}
