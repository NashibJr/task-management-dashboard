import React from "react";
import Card from "./Card";
import { RiEditLine } from "react-icons/ri";

const Task = () => {
  return (
    <Card>
      <div className="flex justify-between">
        <h2 className="font-bold opacity-90 text-xl">Task 1</h2>
        <p className="p-[2px] text-orange-400 bg-orange-50 text-[10px] h-[20px] w-[50px] text-center rounded-md font-semibold">
          pending
        </p>
      </div>
      <p className="text-sm opacity-75 mt-1">This is task 1</p>
      <div className="flex justify-between mt-5">
        <p className="font-semibold text-xs opacity-65">Due date: 1/1/2024</p>
        <RiEditLine className="opacity-65" />
      </div>
    </Card>
  );
};

export default Task;
