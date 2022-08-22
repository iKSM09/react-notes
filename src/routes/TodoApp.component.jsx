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
  const [tabIndex, setTabIndex] = useState(false);
  const { setInputValue, todoList, addNewTask } = useTodoContext();
  const inputRef = useRef();

  const addNewTaskOnEnter = (e) => {
    addNewTask(e);
    setTabIndex(false);
  };

  const addNewTaskOnClick = (e) => {
    inputRef.current.value && addNewTask(e);
    setTabIndex(false);
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
        onKeyDown={(e) => addNewTaskOnEnter(e)}
        onChange={(e) => setInputValue(e.target.value) + setTabIndex(true)}
        tabIndex={tabIndex ? 0 : null}
      />
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

const TodoItem = ({ todo }) => {
  const [tabIndex, setTabIndex] = useState(false);
  const { id, task, details, completed, editable } = todo;
  const { makeTaskEditable, editTask, updateTask, completeTask, deleteTask } =
    useTodoContext();

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
          <EditableInput
            value={task}
            onChange={(e) => editTask(e, id) + setTabIndex(true)}
            onKeyDown={(e) => updatetaskOnEnter(e, id)}
            tabIndex={tabIndex ? 0 : null}
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
  const [toggleListName, setToggleListName] = useState(false);
  const { listName, setListName, todoList } = useTodoContext();

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
