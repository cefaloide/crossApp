import React from "react";
import { useInfo } from "../store/context";
import { Button } from "../styles/sharedStyles";
import { StoredInfoType } from "../utils/types";

const ListView = () => {
  const { state, dispatch } = useInfo();

  const resetInfo = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      {state.storedInfo.map((element: StoredInfoType, index: number) => (
        <div key={index}>
          <div>Reps: {element.reps}</div>
          <div>Text: {element.text}</div>
          <div>{element.dateTime}</div>
          ------
        </div>
      ))}
      <Button primary onClick={resetInfo}>
        Reset
      </Button>
    </div>
  );
};

export default ListView;
