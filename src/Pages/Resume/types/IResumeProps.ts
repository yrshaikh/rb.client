import {IResumeAbout, IResumeEducation, IResumeProfile, IResumeSkill, IResumeWorkExperience} from "./IResumeTypes";

export interface IResumeProps {
  profile: IResumeProfile;
  about: IResumeAbout;
  workExperiences: IResumeWorkExperience[];
  education: IResumeEducation[];
  skills: IResumeSkill;
}
