import { useState } from "react";
import styled from "styled-components";
import {
  MdAdd,
  MdAddBox,
  MdAddCircleOutline,
  MdSubdirectoryArrowRight,
  MdTaskAlt,
  MdRadioButtonUnchecked,
  MdDelete,
} from "react-icons/md";

import { useTodoContext } from "../../contexts/todo.context";

const TodoContainer = styled.section`
  * {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-block: 4px;
  }
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-block: 4px;
`;

const TaskArea = styled.div`
  width: 240px;
  text-align: left;
`;

const Task = styled.p`
  margin: 0;
  width: 240px;
  height: 30px;
  font-size: 16px;
  text-align: left;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "white")};
`;

const TaskDetails = styled.p`
  margin: 0;
  font-size: 14px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "lightgray")};
`;

const EditableTaskInput = styled.input.attrs({ type: "text" })`
  width: 240px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

const EditableDetailsInput = styled.textarea.attrs({ cols: 40 })`
  width: 240px;
  height: 80px;
  margin-top: 8px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

const TodoItem = ({ todo }) => {
  const [tabIndex, setTabIndex] = useState(false);
  const { id, task, details, completed, editable, subTask } = todo;
  const {
    makeTaskEditable,
    editTask,
    editDetails,
    updateTask,
    completeTask,
    deleteTask,
  } = useTodoContext();

  const updatetaskOnEnter = (e, id) => {
    updateTask(e, id);
    setTabIndex(false);
  };

  const addNewSubTask = () => {};

  return (
    <TodoContainer>
      <div>
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
            <TaskArea>
              <EditableTaskInput
                defaultValue={task}
                onChange={(e) => editTask(e, id) + setTabIndex(true)}
                onKeyDown={(e) => updatetaskOnEnter(e, id)}
                tabIndex={tabIndex ? 0 : null}
              />
              <EditableDetailsInput
                placeholder="add Task details"
                defaultValue={details}
                onChange={(e) => editDetails(e, id) + setTabIndex(true)}
                onKeyDown={(e) => updatetaskOnEnter(e, id)}
                tabIndex={tabIndex ? 0 : null}
              />
            </TaskArea>
          ) : (
            <TaskArea>
              <Task completed={completed} onClick={() => makeTaskEditable(id)}>
                {task}
              </Task>
              {details && details !== "" ? (
                <TaskDetails completed={completed}>{details}</TaskDetails>
              ) : null}
            </TaskArea>
          )}
        </TaskWrapper>
        <span
          style={{
            width: "40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MdAdd onClick={() => addNewSubTask} />
          <MdDelete onClick={() => deleteTask(id)} />
        </span>
      </div>
    </TodoContainer>
  );
};

export default TodoItem;
