import { useState, useEffect, createContext, useContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [listName, setListName] = useState("My Tasks");
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const existingTodoList = () => {
      let existing = JSON.parse(localStorage.getItem("todoList"));
      if (existing === null || existing === undefined) existing = [];
      localStorage.todoList = JSON.stringify(existing);
    };

    existingTodoList();

    const localTodoList = JSON.parse(localStorage.getItem("todoList"));
    const localListName = JSON.parse(localStorage.getItem("listName"));

    const initialTodoListState = [
      {
        id: "001",
        task: "Add Task",
        details:
          "lorem ipsum dolor sit amet,sdfhsdjfhskdjfhjksdfhd sdfuisdf dfnjkas fnaskfnjkaf asfn ajfgjkasd fnbjsdbvksjdgbvu",
        completed: false,
        editable: false,
      },
      {
        id: "002",
        task: "Edit task by clickin on it",
        details: "",
        completed: false,
        editable: false,
      },
      {
        id: "003",
        task: "Complete Task",
        details: "",
        completed: true,
        editable: false,
      },
      {
        id: "004",
        task: "Delete Task 👉",
        details: "",
        completed: false,
        editable: false,
      },
    ];

    setListName(localListName);

    localTodoList && localTodoList.length === 0
      ? setTodoList(initialTodoListState)
      : setTodoList(localTodoList);
  }, []);

  const addNewTask = (e) => {
    let newTodoItem = (newTask) => {
      const newTodo = {
        id: new Date().getTime().toString(),
        task: newTask,
        completed: false,
        editable: false,
      };

      const newState = [...todoList, newTodo];

      e.type = "keydown" ? (e.target.value = "") : "";
      setTodoList(newState);
      localStorage.todoList = JSON.stringify(newState);
    };

    if (e.key === "Enter") {
      e.target.value && newTodoItem(e.target.value);
    }

    if (e.type === "click") {
      newTodoItem(inputValue);
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
    listName,
    setListName,
    todoList,
    setInputValue,
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
