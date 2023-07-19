import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        bg: 'background.paper',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" align="center" color="text.secondary">
        &copy; {new Date().getFullYear()} Powered by I3K
      </Typography>
    </Box>
  );
};

export default Footer;
