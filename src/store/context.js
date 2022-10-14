import * as React from "react";
import { LocalSorageValues } from "../utils/constants";

const CountContext = React.createContext();

const initialState = {
  storedInfo:
    JSON.parse(localStorage.getItem(LocalSorageValues.STORED_INFO)) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "save": {
      return { storedInfo: [...state.storedInfo, action.payload] };
    }
    case "reset": {
      return { storedInfo: [] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const InfoProvider = ({ children }) => {
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
