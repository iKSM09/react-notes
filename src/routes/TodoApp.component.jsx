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

const EditableInput = styled.input.attrs({ type: "text" })`
  width: auto;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

const TodoItem = ({
  todo: { id, task, completed, editable },
  makeTaskEditable,
  editTask,
  updateTask,
  completeTask,
  deleteTask,
}) => {
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
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const localTodoList = JSON.parse(localStorage.getItem("todoList"));
    setTodoList(localTodoList);
  }, []);

  const addNewTask = (e) => {
    if (e.key === "Enter") {
      const newTodo = {
        id: new Date().getTime().toString(),
        task: e.target.value,
        completed: false,
        editable: false,
      };
      setTodoList([...todoList, newTodo]);
      localStorage.setItem("todoList", JSON.stringify([...todoList, newTodo]));
      e.target.value = "";
    }
  };

  const makeTaskEditable = (id) => {
    const editableTask = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editable: true };
      }
      return todo;
    });

    setTodoList(editableTask);
  };

  const editTask = (e, id) => {
    let editingTask = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: e.target.value };
      }

      return todo;
    });

    setTodoList(editingTask);
  };

  const updateTask = (e, id) => {
    if (e.key === "Enter") {
      const updatingTask = todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editable: false };
        }

        return todo;
      });
      setTodoList(updatingTask);
      localStorage.todoList = JSON.stringify(updatingTask);
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
    localStorage.todoList = JSON.stringify(completedTodo);
  };

  const deleteTask = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    localStorage.todoList = JSON.stringify(updatedTodoList);
  };

  return (
    <div>
      <h2>My Tasks</h2>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            makeTaskEditable={makeTaskEditable}
            editTask={editTask}
            updateTask={updateTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks yet</p>
      )}
      <TaskInputContainer addNewTaskHandler={addNewTask} />
    </div>
  );
};

export default TodoApp;
