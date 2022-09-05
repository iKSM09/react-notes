import { MdAdd, MdDelete } from "react-icons/md";

import { useTodoContext } from "../../../contexts/todo.context";
import { Icon } from "../../index.js";

const TodoExecutables = ({ id }) => {
  const { deleteTask } = useTodoContext();

  const addNewSubTask = () => {};

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Icon iconSize="22px" onClick={() => addNewSubTask}>
        <MdAdd />
      </Icon>
      <Icon iconSize="22px" onClick={() => deleteTask(id)}>
        <MdDelete />
      </Icon>
    </span>
  );
};

export default TodoExecutables;
