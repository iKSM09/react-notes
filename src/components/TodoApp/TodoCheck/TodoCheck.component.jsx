import { MdTaskAlt, MdRadioButtonUnchecked } from "react-icons/md";

import { useTodoContext } from "../../../contexts/todo.context";
import { Icon } from "../../index.js";

const TodoCheck = ({ id, completed }) => {
  const { completeTask } = useTodoContext();
  return (
    <span onClick={() => completeTask(id)}>
      {completed ? (
        <Icon>
          <MdTaskAlt />
        </Icon>
      ) : (
        <Icon>
          <MdRadioButtonUnchecked />
        </Icon>
      )}
    </span>
  );
};

export default TodoCheck;
