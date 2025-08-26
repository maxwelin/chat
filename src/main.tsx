import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a055a180153c1dbb6f4ab5002d4c5e2f@o4509910134554624.ingest.de.sentry.io/4509910135865424",
  sendDefaultPii: true
});

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
