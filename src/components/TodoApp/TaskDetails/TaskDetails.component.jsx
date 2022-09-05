import { useTodoContext } from "../../../contexts/todo.context";

import {
  DetailsWrapper,
  Details,
  EditableDetailsInput,
} from "./TaskDetails.styles";

const TaskDetails = ({
  id,
  details,
  completed,
  editable,
  tabIndex,
  setTabIndex,
  updatetaskOnEnter,
}) => {
  const { editDetails } = useTodoContext();

  return (
    <DetailsWrapper>
      {editable ? (
        <EditableDetailsInput
          placeholder="add Task details"
          defaultValue={details}
          onChange={(e) => editDetails(e, id) + setTabIndex(true)}
          onKeyDown={(e) => updatetaskOnEnter(e, id)}
          tabIndex={tabIndex ? 0 : null}
        />
      ) : (
        <span>
          {details && details !== "" ? (
            <Details completed={completed}>{details}</Details>
          ) : null}
        </span>
      )}
    </DetailsWrapper>
  );
};

export default TaskDetails;
