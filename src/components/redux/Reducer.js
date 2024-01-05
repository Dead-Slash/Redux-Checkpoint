import { ADDTASK, DELETETASK, EDITTASK } from "./Actiontype";

const initialState = {
  list: [
    { id: 1, taskName: "learn react", isDone: false },
    { id: 2, taskName: "learn react hooks", isDone: true },
  ],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, list: [...state.list, payload] };

    case DELETETASK:
      return { ...state, list: state.list.filter((e) => e.id !== payload) };

    case EDITTASK:
      return {
        ...state,
        list: state.list.map((e) => (e.id === payload.id ? e=payload.data : e)),
      };

    default:
      return state;
  }
};
