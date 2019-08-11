import { Button } from "antd";
import * as _ from "lodash";
import React, { Component } from "react";

import { ResumeSections } from "../../types/ResumeSections";
import "./ResumePageActions.scss";

interface IResumePageActionButtons {
  icon: string;
  displayText: string;
  type: ResumeSections;
}

interface IProps {
  handleAction: (type: ResumeSections, displayText: string) => void;
}

export default class ResumePageActions extends Component<IProps, {}> {
  private readonly buttons: IResumePageActionButtons[];
  constructor(props: IProps) {
    super(props);
    this.buttons = [];
    this.buttons.push({
      displayText: "Profile Details",
      icon: "profile",
      type: ResumeSections.Profile
    });
    this.buttons.push({
      displayText: "Education",
      icon: "book",
      type: ResumeSections.Education
    });
    this.buttons.push({
      displayText: "About",
      icon: "book",
      type: ResumeSections.About
    });
    this.buttons.push({
      displayText: "Experiences",
      icon: "project",
      type: ResumeSections.Experiences
    });
    this.buttons.push({
      displayText: "Skills",
      icon: "tags",
      type: ResumeSections.Skills
    });
  }
  public render(): JSX.Element {
    return (
      <div className="ResumePageActions">
        <Button type="primary" icon="download" size="large">
          Download as PDF
        </Button>
        {this.renderActions()}
      </div>
    );
  }
  private renderActions(): JSX.Element[] {
    const buttons: JSX.Element[] = [];
    let key: number = 0;
    _.forEach(this.buttons, (button: IResumePageActionButtons) => {
      buttons.push(
        <Button
          type="default"
          icon={button.icon}
          size="default"
          onClick={() => this.actionButtonClicked(button)}
          key={key}
        >
          {button.displayText}
        </Button>
      );
      key++;
    });
    return buttons;
  }

  private actionButtonClicked(button: IResumePageActionButtons): any {
    this.props.handleAction(button.type, button.displayText);
  }
}
