import { useState, useEffect, createContext, useContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todoList);
  let indexCount = 0;

  useEffect(() => {
    const existingTodoList = () => {
      let existing = JSON.parse(localStorage.getItem("todoList"));
      if (existing === null || existing === undefined) existing = [];
      localStorage.todoList = JSON.stringify(existing);
    };

    existingTodoList();

    const localTodoList = JSON.parse(localStorage.getItem("todoList"));

    const initialTodoListState = [
      {
        id: "001",
        task: "Add Task",
        details: "",
        completed: false,
        editable: false,
        subTask: [
          {
            id: "001.01",
            task: "Add Sub-Task001",
            details: "",
            completed: false,
            editable: false,
          },
          {
            id: "001.02",
            task: "Add Sub-Task002",
            details: "",
            completed: false,
            editable: false,
          },
        ],
      },
      {
        id: "002",
        task: "Edit task by clickin on it",
        details: "",
        completed: false,
        editable: false,
        subTask: [],
      },
      {
        id: "003",
        task: "Complete Task",
        details: "",
        completed: true,
        editable: false,
        subTask: [],
      },
      {
        id: "004",
        task: "Delete Task 👉",
        details: "",
        completed: false,
        editable: false,
        subTask: [],
      },
    ];

    localTodoList && localTodoList.length === 0
      ? setTodoList(initialTodoListState)
      : setTodoList(localTodoList);
  }, []);

  useEffect(() => {
    const uncompletedTodos = todoList.filter(
      (todo) => todo.completed === false
    );
    setFilteredTodos(uncompletedTodos);
  }, [todoList]);

  const filterTodoList = (value) => {
    if (value === "all") {
      const uncompletedTodos = todoList.filter(
        (todo) => todo.completed === false
      );
      setFilteredTodos(uncompletedTodos);
    }

    if (value === "completed") {
      const completedTodos = todoList.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  };

  const addNewTask = (e) => {
    let newTodoItem = (newTask) => {
      const newTodo = {
        index: indexCount + 1,
        id: new Date().getTime().toString(),
        task: newTask,
        completed: false,
        editable: false,
      };

      const newState = [...filteredTodos, newTodo];

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
    setInputDisabled(true);
    const editableTask = todoList.map((todo) =>
      todo.id === id ? { ...todo, editable: true } : todo
    );

    setTodoList(editableTask);
  };

  const editTask = (e, id) => {
    let editingTask = todoList.map((todo) =>
      todo.id === id ? { ...todo, task: e.target.value } : todo
    );

    setTodoList(editingTask);
  };

  const editDetails = (e, id) => {
    let editingDetail = todoList.map((todo) =>
      todo.id === id ? { ...todo, details: e.target.value } : todo
    );

    setTodoList(editingDetail);
  };

  const updateTask = (e, id) => {
    if (e.key === "Enter") {
      const updatingTask = todoList.map((todo) =>
        todo.id === id ? { ...todo, editable: false } : todo
      );
      setTodoList(updatingTask);
      localStorage.todoList = JSON.stringify(updatingTask);
      setInputDisabled(false);
    }
  };

  const completeTask = (id) => {
    const completedTodo = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(completedTodo);
    localStorage.todoList = JSON.stringify(completedTodo);
  };

  const deleteTask = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    localStorage.todoList = JSON.stringify(updatedTodoList);
  };

  const value = {
    setInputValue,
    inputDisabled,
    todoList,
    filteredTodos,
    filterTodoList,
    addNewTask,
    makeTaskEditable,
    editTask,
    editDetails,
    updateTask,
    completeTask,
    deleteTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
