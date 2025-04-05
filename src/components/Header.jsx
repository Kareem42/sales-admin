import { Typography, Box, useTheme } from "@mui/material"; // Updated import for Material-UI v5
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme(); // Access the theme
  const colors = tokens(theme.palette.mode); // Get the color tokens based on the theme mode

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]} // Use color from tokens
        fontWeight="bold"
        sx={{ mb: "5px" }} /* margin bottom for spacing between title and subtitle */
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;