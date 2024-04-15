import React from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import style from "./Masters.module.css";

const Master = ({master, isAdmin, handleEditMasterModal}) => {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div>
    <div className={style.slider_content}>
      <div className={style.master_description}>
        <h2>
          {master.name} {master.second_name}
        </h2>
        <p>{master.description}</p>
        <MyButton>Запись</MyButton>
        {isAdmin === 'true' ? (
          <MyButton onClick={() => handleEditMasterModal(master)}>
            Редактировать
          </MyButton>
        ) : (
          ""
        )}
      </div>
      <div>
        <img
          src={
            process.env.REACT_APP_API_URL + master.image || "default.jpg"
          }
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default Master