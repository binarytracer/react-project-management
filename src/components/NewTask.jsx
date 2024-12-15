import { useState } from "react";
import Button from "./Button";

export default function NewTask(props) {
  const { onAdd } = props;

  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    if (task.trim() === "") {
      return;
    }

    onAdd(task);
    setTask("");
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          type="text"
          value={task}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <Button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950 "
        >
          Add Task
        </Button>
      </div>
    </>
  );
}
