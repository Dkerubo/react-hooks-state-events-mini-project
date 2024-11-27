// src/__tests__/TaskList.test.js
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data"; // Adjust path if necessary

test("displays all tasks when initially rendered", () => {
  render(<TaskList tasks={TASKS} />);
  const taskItems = screen.getAllByRole("listitem");
  expect(taskItems.length).toBe(TASKS.length);
});
