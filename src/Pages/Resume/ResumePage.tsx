import { Col, Row } from "antd";
import React, { Component } from "react";
import DefaultResume from "../ResumeThemes/DefaultResume/DefaultResume";
import ResumePageActions from "./components/ResumePageActions/ResumePageActions";
import ResumePageDrawer from "./components/ResumePageDrawer/ResumePageDrawer";
import ResumePageInfo from "./components/ResumePageInfo/ResumePageInfo";
import { IResumePageDrawerProps } from "./types/IResumePageDrawerProps";
import { IResumePageProps } from "./types/IResumePageProps";
import { IResumePageState } from "./types/IResumePageState";
import { IResumeProps } from "./types/IResumeProps";

import ResumeService from "./../../Services/ResumeService";
import "./ResumePage.scss";
import { ResumeSections } from "./types/ResumeSections";

export default class ResumePage extends Component<
  IResumePageProps,
  IResumePageState
> {
  private resumeService: ResumeService;
  constructor(props: IResumePageProps) {
    super(props);
    this.resumeService = new ResumeService();
    this.handleAction = this.handleAction.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
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
        <ResumePageDrawer {...this.state.drawerState} />
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

  private handleAction(type: ResumeSections, displayText: string): any {
    this.setState({
      drawerState: {
        onClose: this.handleDrawerClose,
        title: displayText,
        type,
        visible: true
      }
    });
  }

  private handleDrawerClose(): any {
    const drawerState: IResumePageDrawerProps = Object.assign(
      {},
      this.state.drawerState
    );
    drawerState.visible = false;
    this.setState({
      drawerState
    });
  }
}
