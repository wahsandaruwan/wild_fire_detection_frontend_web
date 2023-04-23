import { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <div className="container">
        {state == 0 || state == 1 ? <h1>Wild Fire Prediction</h1> : null}
        {state == 2 ? <h1>Wild Fire Prediction</h1> : null}
        {state == 0 ? <img src={logo} alt="logo" /> : null}
        {state == 1 ? <p>Getting Live Prediction...</p> : null}
        <button>{state == 0 ? "Load" : "Back"}</button>
      </div>
    </>
  );
}

export default App;
