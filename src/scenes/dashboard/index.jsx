import { Box } from "@mui/material"; // Correct import for Material-UI v5
import Header from "../../components/Header"; // Adjust the import path as necessary

const Dashboard = () => {
  return (
    <Box m="20px"> {/* Margin around the dashboard for spacing */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="20px" // Margin bottom for spacing below the header
      >
      </Box>
      <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      Dashboard
    </Box>
    
  );
};

export default Dashboard;