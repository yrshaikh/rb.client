import { IResumeProps } from "../Pages/Resume/types/IResumeProps";
import {
  IResumeEducation,
  IResumeSkill,
  IResumeWorkExperience
} from "../Pages/Resume/types/IResumeTypes";

export default class ResumeService {
  public async getResumeInfo(): Promise<IResumeProps> {
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

    return {
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
    };
  }
}
