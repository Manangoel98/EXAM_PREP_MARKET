export interface UserStats {
  currentScore: number;
  goalScore: number;
  attempted: number;
  subjectPerformance: {
    subject: string;
    topics: {
      label: string;
      value: number;
    }[];
  }[];
  planType?: string | null;
}

export interface StudyPlanTask {
  id: string;
  title: string;
  subject: string;
  content_area: string;
  topic: string;
  time: number;
  completed: boolean;
}