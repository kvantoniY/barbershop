import React, { useState } from "react";
import style from "./EditServiceModal.module.css";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import {
  deleteServices,
  editServices,
} from "../../../store/servicesSlice";

const EditServiceModal = ({ modal, setModal, service}) => {
  const [title, setTitle] = useState(service.title);
  const [price, setPrice] = useState(service.price);
  const [price_medium, setPriceMedium] = useState(service.price_medium);
  const [price_high, setPriceHigh] = useState(service.price_high);
  const [service_time, setServiceTime] = useState(service.time);
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch();

  const handleEdit = () => {
    if(title === "" || price === "" || price_medium === "" || price_high === "") {
      setErrorMessage("Заполните все обязательные поля!");
    } else {
    dispatch(
      editServices([service.id, title, price, price_medium, price_high, service_time])
    );
    setModal(false)
    setErrorMessage("");
    }
  };
  const deleteService = () => {
    if (window.confirm("Вы уверены что хотите удалить услугу?")) {
      dispatch(deleteServices(service.id));
      setModal(false);
      setTitle('')
    }
  };
  return (
    <div>
        <div className={style.modal} onClick={() => setModal(false)}>
          <div className={style.modal_body} onClick={e => e.stopPropagation()}>
            <span className={style.close} onClick={() => setModal(false)}>
              &times;
            </span>
            <h2>Редактировать услугу</h2>
            <div className={style.modal_content}>
            <div>
              <span>Название</span>
              <MyInput value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <span>Цена</span>
              <MyInput value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
              <span>Цена средняя</span>
            <MyInput
              value={price_medium}
              onChange={(e) => setPriceMedium(e.target.value)}
            />
            </div>
            <div>
              <span>Цена высокая</span>
            <MyInput
              value={price_high}
              onChange={(e) => setPriceHigh(e.target.value)}
            />
            </div>
            <div>
              <span>Время</span>
            <MyInput
              value={service_time}
              onChange={(e) => setServiceTime(e.target.value)}
            />
            </div>
            </div>
            <div className={style.error}>{errorMessage}</div>
            <MyButton onClick={handleEdit}> Изменить</MyButton>
            <MyButton onClick={deleteService}> УДАЛИТЬ УСЛУГУ</MyButton>
          </div>
        </div>
    </div>
  );
};

export default EditServiceModal;
