"use client";

import React from "react";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import Button from "./Button";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="m-2 flex justify-between nav-container p-2">
      <h2 className="font-bold text-2xl sm:text-4xl opacity-85">T.M.D</h2>
      <span>
        <Image
          src="/images/user.jpg"
          className="rounded-full cursor-pointer -mt-3"
          alt=""
          width={50}
          height={50}
          onClick={handleClick}
          priority
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <h2 className="font-bold text-lg p-2">User 1</h2>
          <Button
            label="Sign Out"
            className="m-2 w-[200px] rounded-md font-semibold text-white p-2 bg-[dodgerblue] outline-none hover:opacity-80"
          />
        </Menu>
      </span>
    </nav>
  );
};

export default Navigation;
