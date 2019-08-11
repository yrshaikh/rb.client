import React, { Component } from "react";
import "./ResumePageInfo.scss";

export default class ResumePageInfo extends Component {
  public render(): JSX.Element {
    return (
      <div className="ResumePageInfo">
        <div className="ResumePageInfo__Title">Untitiled Resume #1</div>
        <div className="ResumePageInfo__UpdatedDate">
          updated: 22nd April 2019
        </div>
      </div>
    );
  }
}
