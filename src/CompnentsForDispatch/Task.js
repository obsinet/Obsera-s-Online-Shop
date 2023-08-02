import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions";

const Task = () => {
  const dispatch = useDispatch();
  const useInputRef = useRef(null);

  function AddNewTask() {
    const task = useInputRef.current.value;
    if (task !== "") {
      dispatch(addToDo(task));
      useInputRef.current.value = "";
    }
  }
  return (
    <Box>
      <input
        type="text"
        label="Outlined"
        variant="outlined"
        ref={useInputRef}
      />
      <Button variant="contained" onClick={AddNewTask}>
        Add Task
      </Button>
    </Box>
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Add task here..."
    //     ref={useInputRef}
    //     className="taskInput"
    //   />
    //   <button variant="contained" onClick={AddNewTask}>
    //     Add Task
    //   </button>
    // </div>
  );
};

export default Task;
