import { Col, Icon, Row } from "antd";
import * as _ from "lodash";
import React, { Component } from "react";
import { IResumeBuilder } from "../../Resume/types/IResumeBuilder";
import { IResumeProps } from "../../Resume/types/IResumeProps";
import {
  IResumeAbout,
  IResumeEducation,
  IResumeProfile,
  IResumeSkill,
  IResumeWorkExperience
} from "../../Resume/types/IResumeTypes";

import "./DefaultResume.scss";

export default class DefaultResume extends Component<IResumeProps, {}>
  implements IResumeBuilder {
  constructor(props: IResumeProps) {
    super(props);
  }
  public render(): JSX.Element {
    const { profile, about, skills, workExperiences, education } = this.props;

    return (
      <div className="DefaultResume">
        {this.buildProfileSection(profile)}
        <Row className="border-bottom">
          <Col span={8}>
            {this.buildAboutSection(about)}
            {this.buildEducationSection(education)}
            {this.buildSkillSection(skills)}
          </Col>
          <Col span={16}>
            {this.buildWorkExperienceSection(workExperiences)}
          </Col>
        </Row>
      </div>
    );
  }

  public buildAboutSection(data: IResumeAbout): JSX.Element {
    return (
      <div className="DefaultResume__About">
        <h1>About</h1>
        <p className="DefaultResume__About__Summary">{data.summary}</p>
      </div>
    );
  }

  public buildEducationSection(data: IResumeEducation[]): JSX.Element {
    const baseClass: string = "DefaultResume__Education";
    let key: number = 0;
    const educationList: JSX.Element[] = [];
    _.forEach(data, (education: IResumeEducation) => {
      educationList.push(
        <div className={`${baseClass}__Item`} key={key}>
          <div className={`${baseClass}__Item__Year`}>
            {education.fromStr} - {education.toStr}
          </div>
          <div className={`${baseClass}__Item__University`}>
            {education.universityName}
          </div>
          <div className={`${baseClass}__Item__Degree`}>
            {education.degreeName}
          </div>
        </div>
      );
      key++;
    });
    return (
      <div className={baseClass}>
        <h1>Education</h1>
        {educationList}
      </div>
    );
  }

  public buildProfileSection(data: IResumeProfile): JSX.Element {
    const baseClass: string = "DefaultResume__Profile";
    return (
      <Row className={baseClass}>
        <Col span={8}>
          <h1 className={`${baseClass}__Name`}>
            {data.firstName}
            <br />
            {data.lastName}
          </h1>
        </Col>
        <Col span={8} className="pos-rel">
          <h2 className={`${baseClass}__Designation pos-abs`}>
            {data.designation}
          </h2>
        </Col>
        <Col className={`${baseClass}__Contacts pos-rel`} span={8}>
          <ul className="pos-abs">
            <li>
              <Icon type="mail" />
              <span>{data.email}</span>
            </li>
            <li>
              <Icon type="chrome" />
              <span>{data.websiteUrl}</span>
            </li>
            <li>
              <Icon type="github" />
              <span>{data.linkedinUrl}</span>
            </li>
            <li>
              <Icon type="linkedin" />
              <span>{data.linkedinUrl}</span>
            </li>
          </ul>
        </Col>
      </Row>
    );
  }

  public buildSkillSection(data: IResumeSkill): JSX.Element {
    const skillList: JSX.Element[] = [];
    let key: number = 0;
    _.forEach(data.skills, (skill: string) => {
      skillList.push(
        <span key={key} className="DefaultResume__Skills__Item">
          {skill},
        </span>
      );
      key++;
    });
    return (
      <div className="DefaultResume__Skills">
        <h1>Skills</h1>
        {skillList}
      </div>
    );
  }

  public buildWorkExperienceSection(
    data: IResumeWorkExperience[]
  ): JSX.Element {
    const experienceList: JSX.Element[] = [];
    let key: number = 0;
    _.forEach(data, (experience: IResumeWorkExperience) => {
      experienceList.push(
        <Row key={key}>
          <Col span={12}>
            <div className="DefaultResume__Experiences__Company">
              {experience.companyName}
            </div>
            <div className="DefaultResume__Experiences__Duration">
              {experience.fromStr} to {experience.toStr}
            </div>
            <div className="DefaultResume__Experiences__Location">
              {experience.location}
            </div>
          </Col>
          <Col span={12} className="pos-rel">
            <Icon
              type="line"
              className="DefaultResume__Experiences__Line pos-abs"
            />
            <div className="DefaultResume__Experiences__JobTitle">
              {experience.jobTitle}
            </div>
            <p className="DefaultResume__Experiences__Summary">
              {experience.summary}
            </p>
          </Col>
        </Row>
      );
      key++;
    });
    return (
      <div className="DefaultResume__Experiences">
        <h1>Experience</h1>
        {experienceList}
      </div>
    );
  }
}
