import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import style from "./Description.module.css"
const Description = () => {
  return (
    <section className={style.description} id='about'>
      <div className="container">
        <h2>Почему именно мы?</h2>
        <p>Это легендарный барбершоп, сумевший объединить лучших мастеров российского и даже международного уровня!
           Закрытый клуб, где каждая деталь продумывалась до мельчайших подробностей, каждая локация имеет свою неповторимую историю и атмосферу. 
           Место, где нет компромиссов - только высочайший уровень сервиса! Это преданные носители истинных мужских традиций, люди знающие стиль.
          Стиль - как жизнь. Измени себя не изменяя себе. Будь с нами.</p>
        <MyButton>Запись</MyButton>
      </div>
    </section>
  );
};

export default Description;
