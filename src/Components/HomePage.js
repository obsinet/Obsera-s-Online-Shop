import { Box, Grid, Typography } from "@mui/material";
import BgImage from "./BgImage";
import BgImage1 from "./Images/ForHome.jpg";
import BgImage2 from "./Images/Women.jpg";
import BgImage3 from "./Images/childs.jpg";
import BgImage4 from "./Images/Mans.jpg";
import BgImage5 from "./Images/flowers.jpeg";
import BgImage6 from "./Images/jellwerys.avif";
const HomePage = () => {
  return (
    <Box sx={{ m: 5 }}>
      <Grid container spacing={4}>
        <Grid md={4} xs={12}>
          <BgImage imageurl={BgImage1} header={"ForHome"} />
        </Grid>
        <Grid px={2} md={4} xs={12}>
          <BgImage imageurl={BgImage2} header={"Womens"} />
        </Grid>
        <Grid md={4} xs={12}>
          <BgImage imageurl={BgImage3} header={"Childs"} />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid md={4} xs={12}>
          <BgImage imageurl={BgImage6} header={"jellwery"} />
        </Grid>
        <Grid px={2} md={4} xs={12}>
          <BgImage imageurl={BgImage5} header={"flower"} />
        </Grid>
        <Grid md={4} xs={12}>
          <BgImage imageurl={BgImage4} header={"Mans"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
