export interface IResumeProfile {
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  linkedinUrl: string;
  websiteUrl: string;
}

export interface IResumeAbout {
  summary: string;
}
export interface IResumeEducation {
  universityName: string;
  degreeName: string;
  from: Date;
  to: Date;
  fromStr: string;
  toStr: string;
}
export interface IResumeSkill {
  skills: string[];
}
export interface IResumeWorkExperience {
  companyName: string;
  jobTitle: string;
  from: Date;
  to?: Date;
  fromStr: string;
  toStr: string;
  location: string;
  summary: string;
}
