import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const MessageInput = ({ input, setInput, onSend, error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '8px',
        borderTop: '1px solid #ccc',
      }}
      className="bg-white"
    >
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        sx={{ marginRight: '8px' }}
      />
      <Button variant="contained" color="primary" onClick={onSend}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
