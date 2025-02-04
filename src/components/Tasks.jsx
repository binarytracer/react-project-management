import NewTask from "./NewTask";

export default function Tasks(props) {
  const { onDelete, onAdd, tasks } = props;

  function handleDelete(taskId) {
    onDelete(taskId);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          this project does not have a tasks
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.taskId} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  onClick={() => handleDelete(task.taskId)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
