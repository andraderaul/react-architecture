import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { TaskActions } from "../../../../store/tasks/tasks.ducks";

import Task from "../Task";
import { ListItems } from "./TaskList.styles";

const TaskList = ({ loading }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(({ tasks }) => tasks);

  useEffect(() => {
    dispatch(TaskActions.getTasksRequest());
  }, [dispatch]);

  if (loading) {
    return <div>loading</div>;
  }

  if (tasks.length === 0) {
    return <ListItems>empty</ListItems>;
  }

  return (
    <ListItems>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onArchiveTask={(id) => dispatch(TaskActions.onArchiveTask(id))}
        />
      ))}
    </ListItems>
  );
};

TaskList.propTypes = {
  loading: PropTypes.bool,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList;
