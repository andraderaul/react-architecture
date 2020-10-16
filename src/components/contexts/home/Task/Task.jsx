import React from "react";
import PropTypes from "prop-types";

import { ListItem, Title, Checkbox } from "./Task.styles";

const Task = ({ task: { id, title }, onArchiveTask }) => {
  return (
    <ListItem>
      <Title>
        <input readOnly type="text" value={title} />
      </Title>

      <Checkbox>
        <label
          onClick={() => {
            onArchiveTask(id);
          }}
        >
          <span>Done</span>
        </label>
      </Checkbox>
    </ListItem>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
};

export default Task;
