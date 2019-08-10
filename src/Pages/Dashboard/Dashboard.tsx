import { Button, Col, Row } from "antd";
import React, { Component } from "react";
import ResumeCard from "./components/ResumeCard/ResumeCard";

interface IState {}

interface IProps {}

export default class Dashboard extends Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <>
        {this.renderHeader()}
        {this.renderResumeCards()}
      </>
    );
  }
  private renderHeader(): JSX.Element {
    return (
      <Row className="border-bottom">
        <Col span={12}>
          <h1>Dashboard</h1>
        </Col>
        <Col span={12}>
          <Button className="pull-right" type="primary" size={"large"}>
            Create Resume
          </Button>
        </Col>
      </Row>
    );
  }
  private renderResumeCards(): JSX.Element {
    return (
      <>
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </>
    );
  }
}
