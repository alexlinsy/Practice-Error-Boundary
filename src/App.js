import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./styles.css";

export default function App() {
  function Bomb() {
    throw new Error("💥 CABOOM 💥");
  }
  function ErrorFallBack({ error }) {
    return (
      <div>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    );
  }
  const [explode, setExplode] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setExplode(true)}>
          <span aria-label="bomb" role="img">
            💣
          </span>
        </button>
        <div>
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            {explode ? <Bomb /> : "Push the button Max!"}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
