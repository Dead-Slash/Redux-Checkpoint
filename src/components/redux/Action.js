import { ADDTASK, DELETETASK, EDITTASK } from "./Actiontype";

export const Addtask = (data) => {
  return { type: ADDTASK, payload: data };
};

export const Deletetask = (id) => {
  return { type: DELETETASK, payload: id };
};

export const Edittask = (id, data) => {
  return { type: EDITTASK, payload: { id, data } };
};
