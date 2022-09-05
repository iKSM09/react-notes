import { useState } from "react";
import styled from "styled-components";

import { useTodoContext } from "../../../contexts/todo.context";

import { Task, TaskDetails } from "../../index.js";

export const TodoContainer = styled.section`
  margin-inline: auto;
  margin-top: 12px;
  padding: 8px 4px 4px;
  width: min(100%, 640px);
  background-color: ${({ theme }) => theme.primaryContainer};
  color: ${({ theme }) => theme.onPrimaryContainer};
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
`;

const TodoItem = ({ todo }) => {
  const [tabIndex, setTabIndex] = useState(false);
  const { id, task, details, completed, editable, subTask } = todo;
  const { makeTaskEditable, editTask, editDetails, updateTask, completeTask } =
    useTodoContext();

  const updatetaskOnEnter = (e, id) => {
    updateTask(e, id);
    setTabIndex(false);
  };

  return (
    <TodoContainer>
      <Task
        id={id}
        task={task}
        completed={completed}
        editable={editable}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        updatetaskOnEnter={updatetaskOnEnter}
      />
      <TaskDetails
        id={id}
        details={details}
        completed={completed}
        editable={editable}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        updatetaskOnEnter={updatetaskOnEnter}
      />
    </TodoContainer>
  );
};

export default TodoItem;
