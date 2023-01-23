import React from "react";
import { useEffect, useState } from "react";
import { useInfo } from "../store/context";
import {
  Button,
  TextInput,
  RepsWrapper,
  ResetTextBtn,
} from "../styles/sharedStyles";
import { LocalSorageValues } from "../utils/constants";

const RepsView = () => {
  const { dispatch } = useInfo();

  const initialRep = localStorage.getItem(LocalSorageValues.REPS);
  const [reps, setReps] = useState(initialRep ? parseInt(initialRep) : 0);

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
    dispatch({
      type: "save",
      payload: { reps: reps.toString(), text, dateTime },
    });
    resetReps();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem(LocalSorageValues.REPS, reps.toString());
  }, [reps]);

  return (
    <div>
      <RepsWrapper onClick={plus}>{reps}</RepsWrapper>
      <div style={{ display: "flex" }}>
        <TextInput
          aria-label="inputInfo"
          value={text}
          onChange={onChangeInput}
        />
        <ResetTextBtn onClick={resetText} data-testid="resetTextBtn">
          X
        </ResetTextBtn>
      </div>
      <Button primary onClick={resetReps}>
        Reset
      </Button>
      <Button onClick={saveInfo}>Save</Button>
    </div>
  );
};

export default RepsView;
