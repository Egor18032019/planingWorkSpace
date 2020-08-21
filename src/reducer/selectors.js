// import {createSelector} from "reselect";
import NameSpace from "./name-space.js";

const getActiveOffice = (state) => {
  return state[NameSpace.DATA].office;
};
const getActivePage = (state) => {
  return state[NameSpace.DATA].page;
};


export {
  getActiveOffice,
  getActivePage,
};
