import { useState, useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import styled from "styled-components";

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

const TaskInputContainer = ({ addNewTaskHandler }) => {
  return (
    <InputContainer>
      <MdAddBox style={{ fontSize: "22px", margin: "4px" }} />
      <TaskInput placeholder="Add a Task" onKeyDown={addNewTaskHandler} />
    </InputContainer>
  );
};

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    { id: "01", task: "Learn Html", completed: false, editable: false },
    { id: "02", task: "Learn Css", completed: false, editable: false },
    { id: "03", task: "Learn JavaScript", completed: false, editable: false },
  ]);

  const addNewTask = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      const newTodo = {
        id: new Date().getTime().toString(),
        task: e.target.value,
        completed: false,
        editable: false,
      };
      setTodoList([...todoList, newTodo]);
      e.target.value = "";
    }
  };

  const completeTask = () => {};

  const deleteTask = () => {};

  return (
    <div>
      <h2>My Tasks</h2>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <p>{todo.task}</p>
        </div>
      ))}
      <TaskInputContainer addNewTaskHandler={addNewTask} />
    </div>
  );
};

export default TodoApp;
