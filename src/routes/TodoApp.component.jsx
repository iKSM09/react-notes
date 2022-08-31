import { useTodoContext } from "../contexts/todo.context";
import { ListName, TodoItem, TaskInputContainer } from "../components";

const TodoApp = () => {
  const { filteredTodos, filterTodoList } = useTodoContext();

  return (
    <div>
      <ListName />
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
