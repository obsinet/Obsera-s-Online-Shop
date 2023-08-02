import { Box, Grid, Typography } from "@mui/material";
import Task from "../CompnentsForDispatch/Task";
import TaskList from "../CompnentsForDispatch/TaskList";

const Shop = () => {
  return (
    <Box>
      <h1>This is a test for shop page</h1>
      <TaskList />
      <Box sx={{mt:3}}>
        <Task />
      </Box>
    </Box>
  );
};

export default Shop;
