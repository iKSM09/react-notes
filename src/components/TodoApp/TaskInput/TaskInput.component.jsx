import { useRef } from "react";
import { MdAddBox } from "react-icons/md";

import { useTodoContext } from "../../../contexts/todo.context";
import { Icon } from "../../index.js";
import { TaskInputContainer, Input } from "./TaskInput.styles";

const TaskInput = () => {
  const { setInputValue, inputDisabled, addNewTask } = useTodoContext();
  const inputRef = useRef();

  const addNewTaskOnClick = (e) => {
    inputRef.current.value && addNewTask(e);
    inputRef.current.value = "";
  };

  const inputValueOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <TaskInputContainer>
      <Icon iconSize="32px">
        <MdAddBox onClick={(e) => addNewTaskOnClick(e)} />
      </Icon>
      <Input
        placeholder="Add a Task"
        ref={inputRef}
        onKeyDown={addNewTask}
        onChange={(e) => setInputValue(e.target.value)}
        tabIndex={0}
        disabled={inputDisabled}
      />
    </TaskInputContainer>
  );
};

export default TaskInput;
