import { configureStore } from "@reduxjs/toolkit";
import historyTimeCurrentReducer from "../redux/history/historyTimeCurrentSlice";
export const store = configureStore({
  reducer: { historyTimeCurrent: historyTimeCurrentReducer },
});
