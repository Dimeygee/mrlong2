"use client";

import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from "react";

type GlobalState = {
  cursorType: string | boolean;
  cursorStyles: string[];
  onCursor: (cursorType: string) => void;
};

type Action = {
  type: "CURSOR_TYPE";
  cursorType: string | boolean;
};

const initialState = {
  cursorType: false,
  cursorStyles: ["pointer", "hovered", "locked", "white"],
};

// Create contexts without default values to enforce provider usage
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
const GlobalDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const globalReducer = (
  state: Omit<GlobalState, "onCursor">,
  action: Action
) => {
  switch (action.type) {
    case "CURSOR_TYPE":
      return {
        ...state,
        cursorType: action.cursorType,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const onCursor = (cursorType: string) => {
    const validCursorType = state.cursorStyles.includes(cursorType)
      ? cursorType
      : false;
    dispatch({ type: "CURSOR_TYPE", cursorType: validCursorType });
  };

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={{ ...state, onCursor }}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

// Custom hook for accessing global state
export const useGlobalStateContext = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalProvider"
    );
  }
  return context;
};

// Custom hook for accessing global dispatch
export const useGlobalDispatchContext = (): Dispatch<Action> => {
  const context = useContext(GlobalDispatchContext);
  if (!context) {
    throw new Error(
      "useGlobalDispatchContext must be used within a GlobalProvider"
    );
  }
  return context;
};
