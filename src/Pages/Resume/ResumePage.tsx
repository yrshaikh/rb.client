import { Col, Row } from "antd";
import React, { Component } from "react";
import DefaultResume from "../ResumeThemes/DefaultResume/DefaultResume";
import ResumePageActions from "./components/ResumePageActions/ResumePageActions";
import ResumePageDrawer from "./components/ResumePageDrawer/ResumePageDrawer";
import ResumePageInfo from "./components/ResumePageInfo/ResumePageInfo";
import { IResumePageProps } from "./types/IResumePageProps";
import { IResumePageState } from "./types/IResumePageState";
import { IResumeProps } from "./types/IResumeProps";

import ResumeService from "./../../Services/ResumeService";
import "./ResumePage.scss";

export default class ResumePage extends Component<
  IResumePageProps,
  IResumePageState
> {
  private resumeService: ResumeService;
  constructor(props: IResumePageProps) {
    super(props);
    this.resumeService = new ResumeService();
  }

  public async componentDidMount(): Promise<void> {
    const resumeInfo: IResumeProps = await this.resumeService.getResumeInfo();
    this.setState({
      resume: resumeInfo
    });
  }

  public render(): JSX.Element {
    if (!this.state) {
      return <p>Loading resume...</p>;
    }
    return (
      <div className="ResumePage">
        <Row>
          <Col span={4}>
            <div className="ResumePage__Sidebar">
              <ResumePageInfo />
              <ResumePageActions handleAction={this.handleAction} />
            </div>
          </Col>
          <Col span={20}>{this.renderResume()}</Col>
        </Row>
        <ResumePageDrawer />
      </div>
    );
  }

  private renderResume(): JSX.Element {
    return (
      <DefaultResume
        profile={this.state.resume.profile}
        about={this.state.resume.about}
        workExperiences={this.state.resume.workExperiences}
        education={this.state.resume.education}
        skills={this.state.resume.skills}
      />
    );
  }

  private handleAction(): any {
    alert("hahaha");
  }
}
