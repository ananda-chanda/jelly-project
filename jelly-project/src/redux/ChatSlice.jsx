import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  user: 'User1', // Example current user
};

const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({ ...action.payload, type: 'sent' });
    },
    receiveMessage: (state, action) => {
      state.messages.push({ ...action.payload, type: 'received' });
    },
  },
});

export const { sendMessage, receiveMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
