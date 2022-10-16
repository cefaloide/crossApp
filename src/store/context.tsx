import * as React from "react";
import { LocalSorageValues } from "../utils/constants";
import { Dispatch, State, ActionType } from "../utils/types";

const CountContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialStoredInfo = localStorage.getItem(LocalSorageValues.STORED_INFO);

const initialState = {
  storedInfo: initialStoredInfo ? JSON.parse(initialStoredInfo) : [],
};

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "save": {
      return { storedInfo: [...state.storedInfo, action.payload] };
    }
    case "reset": {
      return { storedInfo: [] };
    }
  }
};

type Props = {
  children: React.ReactNode;
};

const InfoProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  React.useEffect(() => {
    localStorage.setItem(
      LocalSorageValues.STORED_INFO,
      JSON.stringify(state.storedInfo)
    );
  }, [state]);

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const useInfo = () => {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error("useInfo must be used within a InfoProvider");
  }
  return context;
};

export { InfoProvider, useInfo };
