import TaskReducer, { TaskActions } from "./tasks.ducks";

describe("task reducer", () => {
  const INITIAL_STATE = {
    tasks: [],
  };

  it("should be able to gets task", () => {
    const data = [1, 2, 3, 4, 5];
    const state = TaskReducer(INITIAL_STATE, TaskActions.getTasksSuccess(data));
    expect(state.tasks).toHaveLength(5);
  });
});
