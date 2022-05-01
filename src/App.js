import "./App.css";
import { useEffect, useMemo, useState } from "react";
import NoSleep from "nosleep.js";

function App() {
  const [rep, setRep] = useState(0);
  const noSleep = useMemo(() => new NoSleep(), []);

  const plus = () => {
    console.log("rep: ", rep);
    const newRep = rep + 1;
    setRep(newRep);
  };

  useEffect(() => {
    noSleep.enable();
  }, []);

  return (
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
  );
}

export default App;
