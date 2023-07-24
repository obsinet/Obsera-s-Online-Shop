import { Box, Typography } from "@mui/material";

const BgImage = (props) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${props.imageurl})`,
        // border: "1px solid red",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        minHeight: "250px",
        borderRadius: "20px",
     
      }}
    >
      <Box
        sx={{
          border: "1px solid black",

          background: "rgba(217, 217, 217, 0.8)",
          width: "120px",
          height: "80px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.header}
        </Typography>
        <Typography
          variant=""
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Shop Now
        </Typography>
      </Box>
    </Box>
  );
};

export default BgImage;
