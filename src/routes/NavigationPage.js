import { Outlet, Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { ReactComponent as CrwLogo } from "../assets/crown.svg";
const Navigation = () => {
  return (
    <Box sx={{ m: 5}}>
      <Box>
        <Grid container spacing={2}>
          <Grid md={9} xs={12}>
            <Link to="/">
              <CrwLogo />
            </Link>
          </Grid>
          <Grid md={3} xs={12}>
            <Grid container spacing={1}>
              <Grid md={3} xs={12}>
                <Link to="/">Home</Link>
              </Grid>
              <Grid md={3} xs={12}>
                <Link to="/Shop">Shop</Link>
              </Grid>
              <Grid md={3} xs={12}>
                <Link>Sign In</Link>
              </Grid>
              <Grid md={3} xs={12}>
                <Link>Cart</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Navigation;
