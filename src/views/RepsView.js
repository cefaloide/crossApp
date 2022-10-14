import { useEffect, useState } from "react";
import { useInfo } from "../store/context";
import { LocalSorageValues } from "../utils/constants";

const RepsView = () => {
  const { dispatch } = useInfo();

  const initialRep = localStorage.getItem(LocalSorageValues.REPS);
  const [reps, setReps] = useState(parseInt(initialRep) || 0);

  const [text, setText] = useState("");

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
    dispatch({ type: "save", payload: { reps, text, dateTime } });
    resetReps();
  };

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem(LocalSorageValues.REPS, reps);
  }, [reps]);

  return (
    <div>
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
    </div>
  );
};

export default RepsView;
