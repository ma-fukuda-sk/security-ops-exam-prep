# Google Cloud Security Operations Engineer Exam Prep

A comprehensive web application for preparing for the Google Cloud Professional Security Operations Engineer certification exam.

## About the Exam

The [Professional Security Operations Engineer](https://cloud.google.com/learn/certification/security-operations-engineer) certification validates expertise in:
- Detecting, monitoring, and analyzing security threats
- Investigating and responding to incidents
- Managing Google Security Operations (Chronicle)
- Implementing detection rules and automation

## Features

- **Question Bank**: 100+ practice questions covering all exam domains
- **Domain Filtering**: Practice by specific topics (Platform Operations, Threat Hunting, etc.)
- **Progress Tracking**: Monitor your learning progress and accuracy
- **Detailed Explanations**: Understand the reasoning behind each answer
- **Mobile Responsive**: Study on any device

## Exam Domains

1. **Platform Operations** (~14%) - Managing Google Security Operations platform
2. **Data Management** (~18%) - Handling security data in Google Cloud
3. **Threat Hunting** (~18%) - Proactively searching for threats
4. **Detection Engineering** (~20%) - Writing and optimizing detection rules
5. **Incident Response** (~20%) - Responding to security incidents
6. **Observability** (~10%) - Monitoring and reporting security status

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Google Cloud Firestore
- **Deployment**: Google Cloud Run
- **CI/CD**: Google Cloud Build

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Cloud Project with Firestore enabled
- (Optional) Firebase Service Account key for local development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ma-fukuda-sk/security-ops-exam-prep.git
cd security-ops-exam-prep
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Google Cloud configuration:
```env
GCP_PROJECT_ID=your-gcp-project-id
FIRESTORE_DATABASE_ID=swarm
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
security-ops-exam-prep/
├── app/                # Next.js App Router pages
├── components/         # Reusable React components
├── lib/               # Utility functions and Firebase config
├── types/             # TypeScript type definitions
├── data/              # Question data and seed scripts
└── public/            # Static assets
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Data Model

Questions are stored in Firestore with the following structure:

```typescript
{
  id: string;
  domain: QuestionDomain;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  createdAt: Date;
}
```

## Deployment

Deploy to Google Cloud Run:

```bash
# Build container
gcloud builds submit --tag gcr.io/PROJECT_ID/security-ops-exam-prep

# Deploy to Cloud Run
gcloud run deploy security-ops-exam-prep \
  --image gcr.io/PROJECT_ID/security-ops-exam-prep \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Contributing

Contributions are welcome! Please check the [GitHub Issues](https://github.com/ma-fukuda-sk/security-ops-exam-prep/issues) for tasks.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Resources

- [Official Exam Guide](https://cloud.google.com/learn/certification/security-operations-engineer)
- [Google Security Operations Documentation](https://cloud.google.com/chronicle/docs)
- [G-gen Exam Preparation Guide](https://blog.g-gen.co.jp/entry/professional-security-operations-engineer-exam)

## License

MIT License

## Acknowledgments

Built with Claude Code by Anthropic
