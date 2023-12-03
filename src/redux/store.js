import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducer/chat-reducer";

const store = configureStore({
	reducer: {
		chatroom: chatReducer,
	}
})

export default store;