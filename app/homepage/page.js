"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Task from "@/components/Task";
import Button from "@/components/Button";
import CreateModal from "@/modals/CreateModal";
import EditModal from "@/modals/EditModal";
import SelectComponent from "@/components/SelectComponent";
import MenuItem from "@mui/material/MenuItem";
import { tasks } from "@/components/dummy";

const Homepage = () => {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [status, setStatus] = React.useState("");

  return (
    <div className="homepage-content">
      <Navigation />
      <div className="p-4">
        <div className="flex justify-between  mb-8">
          <p>Tasks</p>
          <span className="flex">
            <SelectComponent
              value={status}
              label="Status"
              width={100}
              handleChange={(event) => setStatus(event.target.value)}
            >
              <MenuItem value="completed">completed</MenuItem>
              <MenuItem value="pending">pending</MenuItem>
            </SelectComponent>
            <Button
              label="Add task"
              className="w-[100px] ml-2 rounded-md font-semibold text-white p-2 bg-[dodgerblue] outline-none hover:opacity-80"
              handleClick={() => setOpen(true)}
            />
          </span>
        </div>
        {tasks.map((task, index) => (
          <Task
            openEditModal={() => setOpenEdit(true)}
            key={index}
            description={task.description}
            dueDate={task.dueDate}
            status={task.status}
            title={task.title}
          />
        ))}
      </div>
      <CreateModal open={open} handleClose={() => setOpen(false)} />
      <EditModal open={openEdit} handleClose={() => setOpenEdit(false)} />
    </div>
  );
};

export default Homepage;
