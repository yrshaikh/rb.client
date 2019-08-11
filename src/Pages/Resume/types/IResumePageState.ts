import { IResumeProps } from "./IResumeProps";
import { ResumeSections } from "./ResumeSections";

export interface IResumePageState {
  resume: IResumeProps;
  drawerState: IResumePageDrawerState;
}

interface IResumePageDrawerState {
  visible: boolean;
  title: string;
  type: ResumeSections;
}
