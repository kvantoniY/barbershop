import React from "react";
import style from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (

        <button className={style.btn} {...props}>
          <span>{children}</span>
        </button>

  );
};

export default MyButton;
