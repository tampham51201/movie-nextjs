import { createSlice } from "@reduxjs/toolkit";
const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
  var items =
    localStorage.getItem("historyTimeCurrentItems") != null
      ? JSON.parse(localStorage.getItem("historyTimeCurrentItems"))
      : [];
}

const initialState = {
  value: items,
};

export const historyTimeCurrentSlice = createSlice({
  name: "historyTimeCurrent",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const item = action.payload;

      const dublicate = findItem(state.value, item);

      if (dublicate.length > 0) {
        state.value = delItem(state.value, item);
        state.value = [
          ...state.value,
          {
            ...item,
          },
        ];
        localStorage.setItem(
          "historyTimeCurrentItems",
          JSON.stringify(state.value)
        );
      } else {
        state.value = [
          ...state.value,
          {
            ...item,
          },
        ];
        localStorage.setItem(
          "historyTimeCurrentItems",
          JSON.stringify(state.value)
        );
      }
    },
  },
});

const findItem = (arr, item) => arr.filter((e) => e.idMovie === item.idMovie);

const delItem = (arr, item) => arr.filter((e) => e.idMovie !== item.idMovie);

// Action creators are generated for each case reducer function
export const { addItems } = historyTimeCurrentSlice.actions;

export default historyTimeCurrentSlice.reducer;
