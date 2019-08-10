import { Button, Col, Dropdown, Icon, Menu, Row } from "antd";
import React, { Component } from "react";
import DefaultResume from "./components/DefaultResume/DefaultResume";
import { IResumePageProps } from "./types/IResumePageProps";
import { IResumePageState } from "./types/IResumePageState";
import {
  IResumeEducation,
  IResumeSkill,
  IResumeWorkExperience
} from "./types/IResumeTypes";

import "./ResumePage.scss";

export default class ResumePage extends Component<
  IResumePageProps,
  IResumePageState
> {
  public async componentDidMount(): Promise<void> {
    await this.getResumeInfo();
  }

  public async getResumeInfo(): Promise<void> {
    const education: IResumeEducation[] = [
      {
        degreeName: "Bachelors in Computer Engineering",
        from: new Date(),
        fromStr: "2010",
        to: new Date(),
        toStr: "2005",
        universityName: "University Of Mumbai"
      }
    ];

    const skills: IResumeSkill = {
      skills: [
        "c#",
        "asp.net core",
        "asp.net mvc",
        "sql",
        "node js",
        "react js",
        "angular js",
        "typescript",
        "mongodb",
        "scss"
      ]
    };

    const workExperiences: IResumeWorkExperience[] = [
      {
        companyName: "Agoda.com",
        from: new Date(),
        fromStr: "2017",
        jobTitle: "Senior Software Engineer",
        location: "Bangkok, Thailand",
        summary:
          "Scrum Master, C#, ASP.NET Core, ASP.NET MVC, SQL, Node JS, React JS, TypeScript, SCSS, Hive, Hadoop, GraphQL, RabbitMQ, Chrome Puppeteer, Kafka",
        to: new Date(),
        toStr: "Present"
      },
      {
        companyName: "Media.net - A Directi group company",
        from: new Date(),
        fromStr: "2012",
        jobTitle: "Senior Web Developer",
        location: "Mumbai, India",
        summary:
          "Web development using ASP.NET MVC, SQL and JavaScript frameworks like AngularJs and BackboneJs. API development using Node JS, Redis, RabbitMq and Java.",
        to: new Date(),
        toStr: "2017"
      },
      {
        companyName: "Kalpavruksh Technologies",
        from: new Date(),
        fromStr: "2010",
        jobTitle: "Software Engineer",
        location: "Mumbai, India",
        summary: "ASP.NET MVC design & development.",
        to: new Date(),
        toStr: "2012"
      }
    ];

    this.setState({
      resume: {
        about: {
          summary:
            // tslint:disable-next-line:max-line-length
            "Passionate full stack engineer with over 9 years of work experience in designing, developing and delivering scaleable projects. Currently I am working with agoda.com at their Bangkok office where I am a part of the front end department responsible for adding & enhancing features to agoda.com website."
        },
        education,
        profile: {
          designation: "Senior Software Engineer",
          email: "yrshaikh.mail@gmail.com",
          firstName: "Yasser",
          lastName: "Shaikh",
          linkedinUrl: "yrshaikh",
          websiteUrl: "http://yassershaikh.com/"
        },
        skills,
        workExperiences
      }
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
              {this.renderResumeName()}
              {this.renderResumeActions()}
            </div>
          </Col>
          <Col span={20}>{this.renderResume()}</Col>
        </Row>
      </div>
    );
  }

  private renderResumeName(): JSX.Element {
    return (
      <div className="ResumePage__Sidebar__Name">
        <div className="ResumePage__Sidebar__Name__Title">Untitiled Resume #1</div>
        <div className="ResumePage__Sidebar__Name__UpdatedDate">updated: 22nd April 2019</div>
      </div>
    );
  }

  private renderResumeActions(): JSX.Element {
    return (
      <div className="ResumePage__Sidebar__Actions">
        <Button type="primary" icon="download" size="large">
          Download as PDF
        </Button>
        <Button type="default" icon="idcard" size="large">
          Personal Details
        </Button>
        <Button type="default" icon="profile" size="large">
          About Me
        </Button>
        <Button type="default" icon="book" size="large">
          Education
        </Button>
        <Button type="default" icon="project" size="large">
          Experience
        </Button>
        <Button type="default" icon="tags" size="large">
          Skills
        </Button>
        <Button type="default" icon="plus" size="large">
          Add More
        </Button>
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
}
