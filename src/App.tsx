import "./App.css";
import { useEffect, useMemo, useState } from "react";
import NoSleep from "nosleep.js";
import { Views } from "./utils/constants";
import RepsView from "./views/RepsView";
import ListView from "./views/ListView";
import { InfoProvider } from "./store/context";

function App() {
  const [view, setView] = useState(Views.REPS);

  const noSleep = useMemo(() => new NoSleep(), []);

  const toggleView = () => {
    const newView = view === Views.REPS ? Views.LIST : Views.REPS;
    setView(newView);
  };

  useEffect(() => {
    noSleep.enable();
  }, [noSleep]);

  return (
    <InfoProvider>
      {view === Views.REPS && <RepsView />}
      {view === Views.LIST && <ListView />}
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          display: "inline-block",
          padding: "10px",
          background: "cornflowerblue",
        }}
        onClick={toggleView}
      >
        {view === Views.REPS ? "show list" : "show reps"}
      </div>
    </InfoProvider>
  );
}

export default App;
