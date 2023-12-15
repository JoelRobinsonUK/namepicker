import { createContext, useReducer } from "react";

export const GroupContext = createContext();

export const groupReducer = (state, action) => {
  switch (action.type) {
    case "SET_GROUPS":
      return {
        groups: action.payload,
      };
    case "ADD_GROUP":
      return {
        groups: state.groups.push(action.payload),
      };
    default:
      return state;
  }
};

export const GroupContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupReducer, {
    groups: null,
  });

  return (
    <GroupContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GroupContext.Provider>
  );
};
