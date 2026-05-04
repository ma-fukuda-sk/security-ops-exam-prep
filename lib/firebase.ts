import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let app: App;
let db: Firestore;

const GCP_PROJECT_ID =
  process.env.GCP_PROJECT_ID ||
  process.env.ANTHROPIC_VERTEX_PROJECT_ID ||
  "ml-hackathon-399901";

const FIRESTORE_DATABASE_ID =
  process.env.FIRESTORE_DATABASE_ID ||
  process.env.NEXT_PUBLIC_FIRESTORE_DATABASE_ID ||
  "swarm";

export function getFirebaseApp(): App {
  if (!app) {
    if (getApps().length === 0) {
      // Initialize with Application Default Credentials for Cloud Run
      app = initializeApp({
        projectId: GCP_PROJECT_ID,
      });
    } else {
      app = getApps()[0];
    }
  }
  return app;
}

export function getFirestoreDb(): Firestore {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    db = getFirestore(firebaseApp, FIRESTORE_DATABASE_ID);
  }
  return db;
}

// Collection names
export const COLLECTIONS = {
  QUESTIONS: "exam_questions",
  USER_PROGRESS: "user_progress",
} as const;
