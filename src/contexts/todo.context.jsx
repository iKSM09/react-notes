import { useState, useEffect, createContext, useContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    { id: "001", task: "Learn Html", completed: false, editable: false },
    { id: "002", task: "Learn Css", completed: false, editable: false },
    { id: "003", task: "Learn JavaScript", completed: false, editable: false },
  ]);

  //   useEffect(() => {
  //     const localTodoList = JSON.parse(localStorage.getItem("todoList"));
  //     setTodoList(localTodoList);
  //   }, []);

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

  const value = {
    todoList,
    addNewTask,
    makeTaskEditable,
    editTask,
    updateTask,
    completeTask,
    deleteTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
