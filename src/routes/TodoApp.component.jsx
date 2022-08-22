import { useState, useEffect, useRef } from "react";
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

const TodoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-block: 4px;
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-block: 4px;
`;

const TaskArea = styled.div`
  width: 240px;
  text-align: left;
`;

const Task = styled.p`
  margin: 0;
  width: 240px;
  height: 30px;
  font-size: 16px;
  text-align: left;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "white")};
`;

const TaskDetails = styled.p`
  margin: 0;
  font-size: 14px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "lightgray")};
`;

const EditableTaskInput = styled.input.attrs({ type: "text" })`
  width: 240px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

const EditableDetailsInput = styled.textarea.attrs({ cols: 40 })`
  width: 240px;
  height: 80px;
  margin-top: 8px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

const TodoItem = ({ todo }) => {
  const [tabIndex, setTabIndex] = useState(false);
  const { id, task, details, completed, editable } = todo;
  const {
    makeTaskEditable,
    editTask,
    editDetails,
    updateTask,
    completeTask,
    deleteTask,
  } = useTodoContext();

  const updatetaskOnEnter = (e, id) => {
    updateTask(e, id);
    setTabIndex(false);
  };

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
          <TaskArea>
            <EditableTaskInput
              value={task}
              onChange={(e) => editTask(e, id) + setTabIndex(true)}
              onKeyDown={(e) => updatetaskOnEnter(e, id)}
              tabIndex={tabIndex ? 0 : null}
            />
            <EditableDetailsInput
              placeholder="add Task details"
              value={details}
              onChange={(e) => editDetails(e, id) + setTabIndex(true)}
              onKeyDown={(e) => updatetaskOnEnter(e, id)}
              tabIndex={tabIndex ? 0 : null}
            />
          </TaskArea>
        ) : (
          <TaskArea>
            <Task completed={completed} onClick={() => makeTaskEditable(id)}>
              {task}
            </Task>
            {details && details !== "" ? (
              <TaskDetails completed={completed}>{details}</TaskDetails>
            ) : null}
          </TaskArea>
        )}
      </TaskWrapper>
      <MdDelete onClick={() => deleteTask(id)} />
    </TodoContainer>
  );
};

const ListNameInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  background: transparent;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const TodoApp = () => {
  const { listName, setListName, filteredTodos, filterTodoList } =
    useTodoContext();
  const [toggleListName, setToggleListName] = useState(false);

  const changeListName = (e) => {
    if (e.key === "Enter") {
      setListName(e.target.value);
      setToggleListName(false);
      localStorage.setItem("listName", JSON.stringify(e.target.value));
    }
  };

  return (
    <div>
      <span>
        {toggleListName ? (
          <ListNameInput onKeyDown={(e) => changeListName(e)} type="text" />
        ) : (
          <h2 onClick={() => setToggleListName(true)}>{listName}</h2>
        )}
      </span>
      <span
        style={{
          marginBlock: "40px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button onClick={() => filterTodoList("all")}>All</button>
        <button onClick={() => filterTodoList("completed")}>Completed</button>
      </span>
      {filteredTodos && filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No tasks yet</p>
      )}

      <TaskInputContainer />
    </div>
  );
};

export default TodoApp;
