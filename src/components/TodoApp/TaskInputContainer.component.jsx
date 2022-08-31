import { useRef } from "react";
import styled from "styled-components";
import { MdAddBox } from "react-icons/md";

import { useTodoContext } from "../../contexts/todo.context";

const InputContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  background: transparent;
  font-size: 16px;
`;

const TaskInputContainer = () => {
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
    <InputContainer>
      <MdAddBox
        onClick={(e) => addNewTaskOnClick(e)}
        style={{ fontSize: "22px", margin: "4px" }}
      />
      <TaskInput
        placeholder="Add a Task"
        ref={inputRef}
        onKeyDown={addNewTask}
        onChange={(e) => setInputValue(e.target.value)}
        tabIndex={0}
        disabled={inputDisabled}
      />
    </InputContainer>
  );
};

export default TaskInputContainer;
