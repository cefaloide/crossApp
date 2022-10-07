import "./App.css";
import { useEffect, useMemo, useState } from "react";
import NoSleep from "nosleep.js";
import { Views, LocalSorageValues } from "./utils/constants";

function App() {
  const initialRep = localStorage.getItem(LocalSorageValues.REPS);
  const [reps, setReps] = useState(parseInt(initialRep) || 0);

  const initialStoredInfo = localStorage.getItem(LocalSorageValues.STORED_INFO);
  const [storedInfo, setStoredInfo] = useState(
    JSON.parse(initialStoredInfo) || []
  );

  const [text, setText] = useState("");
  const [view, setView] = useState(Views.REPS);

  const noSleep = useMemo(() => new NoSleep(), []);

  const plus = () => {
    const newReps = reps + 1;
    setReps(newReps);
  };

  const resetReps = () => {
    setReps(0);
  };
  const resetText = () => {
    setText("");
  };

  const saveInfo = () => {
    const dateTime = new Date().toLocaleString();
    setStoredInfo([...storedInfo, { reps, text, dateTime }]);
    resetReps();
  };

  const resetInfo = () => {
    setStoredInfo([]);
  };

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const toggleView = () => {
    const newView = view === Views.REPS ? Views.LIST : Views.REPS;
    setView(newView);
  };

  useEffect(() => {
    noSleep.enable();
  }, [noSleep]);

  useEffect(() => {
    localStorage.setItem(LocalSorageValues.REPS, reps);
  }, [reps]);

  useEffect(() => {
    localStorage.setItem(
      LocalSorageValues.STORED_INFO,
      JSON.stringify(storedInfo)
    );
  }, [storedInfo]);

  return (
    <>
      {view === Views.REPS && (
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
            {reps}
          </div>
          <div style={{ display: "flex" }}>
            <input
              aria-label="inputInfo"
              value={text}
              onChange={onChangeInput}
              style={{ fontSize: "2rem", width: "100%" }}
            />
            <div
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                display: "inline-block",
                padding: "10px",
                background: "white",
                fontWeight: "bold",
              }}
              onClick={resetText}
              data-testid="resetTextBtn"
            >
              X
            </div>
          </div>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              display: "inline-block",
              padding: "10px",
              background: "coral",
            }}
            onClick={resetReps}
          >
            Reset
          </div>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              display: "inline-block",
              padding: "10px",
              background: "cornflowerblue",
            }}
            onClick={saveInfo}
          >
            Save
          </div>
        </>
      )}
      {view === Views.LIST && (
        <>
          {storedInfo.map((element, index) => (
            <div key={index}>
              <div>Reps: {element.reps}</div>
              <div>Text: {element.text}</div>
              <div>{element.dateTime}</div>
              ------
            </div>
          ))}
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              display: "inline-block",
              padding: "10px",
              background: "coral",
            }}
            onClick={resetInfo}
          >
            Reset
          </div>
        </>
      )}
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
    </>
  );
}

export default App;
