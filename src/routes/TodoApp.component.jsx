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

const TodoItem = ({
  todo: { id, task, completed, editable },
  completeTaskHandler,
  deleteTaskHandler,
}) => {
  return (
    <TodoContainer>
      <TaskWrapper>
        <span onClick={() => completeTaskHandler(id)}>
          {completed ? (
            <MdTaskAlt style={{ fontSize: "18px", margin: "6px" }} />
          ) : (
            <MdRadioButtonUnchecked
              style={{ fontSize: "18px", margin: "6px" }}
            />
          )}
        </span>
        <Task completed={completed}>{task}</Task>
      </TaskWrapper>
      <MdDelete onClick={() => deleteTaskHandler(id)} />
    </TodoContainer>
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

  const completeTask = (id) => {
    const completedTodo = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(completedTodo);
  };

  const deleteTask = (id) => {
    console.log("deleted", id);
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h2>My Tasks</h2>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTaskHandler={completeTask}
          deleteTaskHandler={deleteTask}
        />
      ))}
      <TaskInputContainer addNewTaskHandler={addNewTask} />
    </div>
  );
};

export default TodoApp;
