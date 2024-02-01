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
    <nav className="m-2 flex justify-between">
      <h2 className="font-bold text-2xl sm:text-4xl">T.M.D</h2>
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
          <Button
            label="Sign Out"
            className="m-2 w-[100px] rounded-md font-semibold text-white p-2 bg-[dodgerblue] outline-none hover:opacity-80"
          />
        </Menu>
      </span>
    </nav>
  );
};

export default Navigation;
