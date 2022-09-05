import { useTodoContext } from "../../../contexts/todo.context.jsx";

import { TodoCheck, TodoExecutables } from "../../index.js";
import { TaskWrapper, TaskText, EditableTaskInput } from "./Task.styles.jsx";

const Task = ({
  id,
  task,
  completed,
  editable,
  tabIndex,
  updateTaskOnEnter,
  setTabIndex,
}) => {
  const { makeTaskEditable, editTask } = useTodoContext();

  return (
    <TaskWrapper>
      <TodoCheck id={id} completed={completed} />
      {editable ? (
        <EditableTaskInput
          defaultValue={task}
          onChange={(e) => editTask(e, id) + setTabIndex(true)}
          onKeyDown={(e) => updatetaskOnEnter(e, id)}
          tabIndex={tabIndex ? 0 : null}
        />
      ) : (
        <TaskText completed={completed} onClick={() => makeTaskEditable(id)}>
          {task}
        </TaskText>
      )}
      <TodoExecutables id={id} />
    </TaskWrapper>
  );
};

export default Task;
