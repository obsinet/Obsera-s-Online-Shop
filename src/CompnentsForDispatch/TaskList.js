import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo } from "../actions";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteToDo(id));
  };
  return (
    <Box>
      <h1>Your tasks</h1>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <Button onClick={() => deleteHandler(task.id)}>Delete</Button>
        </li>
      ))}
    </Box>
  );
};

export default TaskList;
