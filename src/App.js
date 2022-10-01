import "./App.css";
import { useEffect, useMemo, useState } from "react";
import NoSleep from "nosleep.js";

function App() {
  const initialRep = localStorage.getItem("rep");
  const [rep, setRep] = useState(parseInt(initialRep) || 0);
  const noSleep = useMemo(() => new NoSleep(), []);

  const plus = () => {
    const newRep = rep + 1;
    setRep(newRep);
  };

  const reset = () => {
    setRep(0);
  };

  useEffect(() => {
    noSleep.enable();
  }, [noSleep]);

  useEffect(() => {
    localStorage.setItem("rep", rep);
  }, [rep]);

  return (
    <>
      <div
        onClick={plus}
        style={{
          background: "lightblue",
          height: "100vh",
          fontSize: "20vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        {rep}
      </div>
      <div
        style={{
          border: "2px solid cornflowerblue",
          borderRadius: "5px",
          display: "inline-block",
          padding: "10px",
          background: "coral",
        }}
        onClick={reset}
      >
        Reset
      </div>
    </>
  );
}

export default App;
