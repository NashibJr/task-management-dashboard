"use client";

import React from "react";
import Modal from "./Modal";
import Input from "@/components/Input";

const CreateModal = ({ open, handleClose }) => {
  const [task, setTask] = React.useState({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevState) => ({ ...prevState, [name]: value }));
  };
  const onConfirm = () => console.log(task, ">>>>>");

  return (
    <Modal
      open={open}
      title="Create task"
      handleClose={handleClose}
      onConfirm={onConfirm}
    >
      <form>
        <Input
          type="text"
          name="title"
          value={task.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <Input
          type="date"
          name="date"
          value={task.date}
          placeholder="Due"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="border border-[#f3f3f3] rounded-md mt-3 outline-none p-3 w-full"
          placeholder="Content"
          rows={4}
        ></textarea>
      </form>
    </Modal>
  );
};

export default CreateModal;
