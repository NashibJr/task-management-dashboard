import React from "react";
import Navigation from "@/components/Navigation";
import Task from "@/components/Task";

const Homepage = () => {
  return (
    <div className="homepage-content">
      <Navigation />
      <div className="p-4">
        <p className="mt-2  mb-8">Tasks</p>
        <Task />
      </div>
    </div>
  );
};

export default Homepage;
