import Input from "./Input";
import { useRef } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function NewProject(props) {
  const { onAdd, onCancel } = props;

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleOnSave() {
    const data = {
      title: titleRef.current.value,
      description: titleRef.current.value,
      dueDate: titleRef.current.value,
    };

    // validation
    if (
      data.title.trim() === "" ||
      data.description.trim() === "" ||
      data.dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd(data);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption={"Close"}>
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">Oops ... invalid input </p>
        <p className="text-stone-600 mb-4">All fields are required</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <Button
              onClick={handleOnSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </Button>
          </li>
        </menu>

        <div>
          <Input type="text" label="Title" ref={titleRef} />
          <Input label="Description" isTextarea ref={descriptionRef} />
          <Input label="Due Date" ref={dueDateRef} type="date" />
        </div>
      </div>
    </>
  );
}
