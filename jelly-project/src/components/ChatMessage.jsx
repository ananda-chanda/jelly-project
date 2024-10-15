import { Box, Typography } from '@mui/material';

const ChatMessage = ({ text, timestamp, isSent }) => {
  return (
    <Box sx={{ textAlign: isSent ? 'right' : 'left' }}>
      <Typography variant="body1" sx={{ display: 'inline-block', padding: '8px', backgroundColor: '#f1f1f1', borderRadius: '4px', margin: '4px 0' }}>
        {text}
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', color: '#888' }}>
        {timestamp}
      </Typography>
    </Box>
  );
};

export default ChatMessage;
