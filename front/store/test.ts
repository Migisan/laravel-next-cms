import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type TestState = {
  message: string;
};

const initialState: TestState = {
  message: "",
};

export const fetchMessage = createAsyncThunk("test/fetchMessage", async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api`);
  console.log(res);

  return res.data;
});

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

// export const {} = testSlice.actions;

export default testSlice.reducer;
