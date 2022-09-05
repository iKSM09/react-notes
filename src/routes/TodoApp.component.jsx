import { useTodoContext } from "../contexts/todo.context";
import { ListName, TodoItem, TaskInput, Button } from "../components";
import styled from "styled-components";

export const TodoAppContainer = styled.div`
  padding: 18px;
`;

const TodoApp = () => {
  const { filteredTodos, filterTodoList } = useTodoContext();

  return (
    <TodoAppContainer>
      <ListName />
      <span
        style={{
          marginBlock: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Button onClick={() => filterTodoList("all")}>All</Button>
        <Button onClick={() => filterTodoList("completed")}>Completed</Button>
      </span>
      {filteredTodos && filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No tasks yet</p>
      )}

      <TaskInput />
    </TodoAppContainer>
  );
};

export default TodoApp;
