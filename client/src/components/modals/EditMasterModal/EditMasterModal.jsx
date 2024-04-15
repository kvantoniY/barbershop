import React, { useState } from "react";
import style from "./EditMasterModal.module.css";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { deleteMasters, editMasters } from "../../../store/mastersSlice";

const EditMasterModal = ({ modal, setModal, master}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(master.name);
  const [second_name, setSecondName] = useState(master.second_name);
  const [description, setDescription] = useState(master.description);
  const [image, setImage] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const selectFile = e => {
    setImage(e.target.files[0])
  }

  const handleEdit = () => {
    if(name === "" || second_name === "") {
      setErrorMessage("Заполните все обязательные поля!");
    } else {
    const formData = new FormData();
    formData.append('id', master.id);
    formData.append('name', name);
    formData.append('second_name', second_name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('fileName', master.image);
    dispatch(editMasters(formData));
    setModal(false);
    setErrorMessage("");
    }
  };

  const deleteMaster = () => {
    if (window.confirm("Вы уверены что хотите удалить мастера?")) {
        console.log(master.id)
        dispatch(deleteMasters(master.id));
        setModal(false)
    }
  };

  return (
    <div>
        <div className={style.modal} onClick={() => setModal(false)}>
          <div className={style.modal_body} onClick={e => e.stopPropagation()}>
            <span className={style.close} onClick={() => setModal(!modal)}>
              &times;
            </span>
            <h2>Редактировать мастера</h2>
            <div className={style.modal_content}>
              <div>
                <span>Имя</span>
                <MyInput value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <span>Фамилия</span>
                <MyInput value={second_name} onChange={(e) => setSecondName(e.target.value)} />
              </div>
              <div>
                <span>Описание</span>
              <MyInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>
              <div>
                <span>Изображение</span>
              <MyInput
                type='file'
                onChange={selectFile}
              />
              </div>
            </div>
            <div className={style.error}>{errorMessage}</div>
            <MyButton onClick={handleEdit}>Изменить</MyButton>
            <MyButton onClick={deleteMaster}>УДАЛИТЬ МАСТЕРА</MyButton>
          </div>
        </div>
    </div>
  );
};

export default EditMasterModal;
