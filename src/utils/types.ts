export type StoredInfoType = {
  reps: string;
  text: string;
  dateTime: string;
};

type SAVE_TYPE = {
  type: "save";
  payload: StoredInfoType;
};
type RESET_TYPE = {
  type: "reset";
};
export type ActionType = SAVE_TYPE | RESET_TYPE;

export type Dispatch = (action: ActionType) => void;
export type State = { storedInfo: StoredInfoType[] };
