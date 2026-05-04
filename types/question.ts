export type QuestionDomain =
  | "platform-operations"
  | "data-management"
  | "threat-hunting"
  | "detection-engineering"
  | "incident-response"
  | "observability";

export type QuestionDifficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  domain: QuestionDomain;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: QuestionDifficulty;
  tags: string[];
  createdAt: Date;
}

export interface UserProgress {
  userId: string;
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  domain: QuestionDomain;
  attemptedAt: Date;
}

export interface DomainStats {
  domain: QuestionDomain;
  totalQuestions: number;
  attempted: number;
  correct: number;
  accuracy: number;
}

export const DOMAIN_LABELS: Record<QuestionDomain, string> = {
  "platform-operations": "Platform Operations",
  "data-management": "Data Management",
  "threat-hunting": "Threat Hunting",
  "detection-engineering": "Detection Engineering",
  "incident-response": "Incident Response",
  observability: "Observability",
};

export const DOMAIN_WEIGHTS: Record<QuestionDomain, number> = {
  "platform-operations": 14,
  "data-management": 18,
  "threat-hunting": 18,
  "detection-engineering": 20,
  "incident-response": 20,
  observability: 10,
};
