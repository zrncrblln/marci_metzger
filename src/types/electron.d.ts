import { SessionData } from "./session";

declare global {
  interface Window {
    electronAPI: {
      getSessionData: () => Promise<SessionData>;
      setSessionData: (sessionData: SessionData) => Promise<boolean>;
      clearSessionData: () => Promise<boolean>;
    };
  }
}
