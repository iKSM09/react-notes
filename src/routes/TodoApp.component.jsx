import { useState, useEffect } from "react";
import {
  MdAddBox,
  MdAddCircleOutline,
  MdSubdirectoryArrowRight,
  MdTaskAlt,
  MdRadioButtonUnchecked,
  MdDelete,
} from "react-icons/md";
import styled from "styled-components";

import { useTodoContext } from "../contexts/todo.context";

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
  const { addNewTask } = useTodoContext();

  return (
    <InputContainer>
      <MdAddBox style={{ fontSize: "22px", margin: "4px" }} />
      <TaskInput placeholder="Add a Task" onKeyDown={addNewTask} />
    </InputContainer>
  );
};

const TodoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 4px;
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block: 4px;
`;

const Task = styled.p`
  margin: 0;
  font-size: 16px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const EditableInput = styled.input.attrs({ type: "text" })`
  width: auto;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

const TodoItem = ({ todo: { id, task, completed, editable } }) => {
  const { makeTaskEditable, editTask, updateTask, completeTask, deleteTask } =
    useTodoContext();

  return (
    <TodoContainer>
      <TaskWrapper>
        <span onClick={() => completeTask(id)}>
          {completed ? (
            <MdTaskAlt style={{ fontSize: "18px", margin: "6px" }} />
          ) : (
            <MdRadioButtonUnchecked
              style={{ fontSize: "18px", margin: "6px" }}
            />
          )}
        </span>
        {editable ? (
          <EditableInput
            value={task}
            onChange={(e) => editTask(e, id)}
            onKeyDown={(e) => updateTask(e, id)}
          />
        ) : (
          <Task completed={completed} onClick={() => makeTaskEditable(id)}>
            {task}
          </Task>
        )}
      </TaskWrapper>
      <MdDelete onClick={() => deleteTask(id)} />
    </TodoContainer>
  );
};

const TodoApp = () => {
  const { todoList } = useTodoContext();

  return (
    <div>
      <h2>My Tasks</h2>
      {todoList && todoList.length > 0 ? (
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No tasks yet</p>
      )}
      <TaskInputContainer />
    </div>
  );
};

export default TodoApp;
