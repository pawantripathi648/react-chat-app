import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	messages: [],
}

const chat = createSlice({
  name: 'chat',
	initialState,
	reducers: {
		setChatMessage: (state, action) => {
			state.messages.push(action.payload)
		},
	}
});

export default chat.reducer;
export const {setChatMessage} = chat.actions;
