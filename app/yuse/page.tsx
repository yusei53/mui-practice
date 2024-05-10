import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Typography
        fontSize={"100px"}
        color={{ sm: "red", md: "blue" }}
        bgcolor={"black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // marginTop={"100px"}
        mt={5}
        p={5}
      >
        Hello World!
      </Typography>
    </Box>
  );
};

export default page;
