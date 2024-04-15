import React from "react";
import style from "./Main.module.css";

const Main = () => {
  
  return (
    <section id='main'>
        <div className={style.section}>
          <img src={require("../../assets/main_background.jpg")} alt=""/>
        </div>
        <h1 className={style.main_description}>
          <p>
            БАРБЕРШОП <span>BARBER</span>
          </p>
        </h1>
    </section>
  );
};

export default Main;
