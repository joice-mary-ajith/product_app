import { AppBar} from "@mui/material";
import { Toolbar} from "@mui/material";
import {Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "#d4af37",}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>PRODUCT DASHBOARD</Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/addProduct">Add Product</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;