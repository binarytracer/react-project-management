import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected(props) {
  const { onStartAddProject } = props;

  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={NoProjectImage}
        alt="An empty task list"
        className="w-16 y-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}
