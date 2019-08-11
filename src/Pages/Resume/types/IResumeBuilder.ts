import {
  IResumeAbout,
  IResumeEducation,
  IResumeProfile,
  IResumeSkill,
  IResumeWorkExperience
} from "./IResumeTypes";

export interface IResumeBuilder {
  buildProfileSection(data: IResumeProfile): JSX.Element;
  buildAboutSection(data: IResumeAbout): JSX.Element;
  buildEducationSection(data: IResumeEducation[]): JSX.Element;
  buildWorkExperienceSection(data: IResumeWorkExperience[]): JSX.Element;
  buildSkillSection(data: IResumeSkill): JSX.Element;
}
