import { ResumeSections } from "./ResumeSections";

export interface IResumePageDrawerProps {
  visible: boolean;
  title: string;
  type: ResumeSections;
  onClose: () => void;
}
