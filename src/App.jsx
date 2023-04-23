// -----Inbuilt components and modules-----
import { useState, useEffect } from "react";

// -----Custom components and modules-----
import logo from "./assets/logo.png";
import { startReading } from "./utilities/main";
import { getData } from "./services/main";

function App() {
  // Content state
  const [state, setState] = useState(0);

  // Prediction state
  const [prediction, setPrediction] = useState("4");

  // Interval
  const MINUTE_MS = 10000;

  // Run at render
  useEffect(() => {
    // Run every 10s
    const interval = setInterval(async () => {
      try {
        const result = await getData();
        if (result.status == 2) {
          const res = await startReading();
          if (res == "success") {
            setState(2);
            setPrediction(result.prediction);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, MINUTE_MS);

    // Clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        {state == 0 || state == 1 ? <h1>Wild Fire Prediction</h1> : null}
        {state == 2 ? (
          <h1>
            {prediction == 0 ? "High Intensity Fire" : "Low Intensity Fire"}
          </h1>
        ) : null}
        {state == 0 ? <img src={logo} alt="logo" /> : null}
        {state == 1 ? <p>Getting Live Prediction...</p> : null}
        {state == 0 ? (
          <button
            onClick={() =>
              startReading().then((res) =>
                res == "success" ? setState(1) : null
              )
            }
          >
            Load
          </button>
        ) : null}
        {state == 1 ? (
          <button
            onClick={() =>
              startReading().then((res) =>
                res == "success" ? setState(0) : null
              )
            }
          >
            Back
          </button>
        ) : null}
        {state == 2 ? (
          <button onClick={() => setState(0)}>Reload</button>
        ) : null}
      </div>
    </>
  );
}

export default App;
