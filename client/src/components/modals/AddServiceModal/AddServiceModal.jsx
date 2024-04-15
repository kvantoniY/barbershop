import React, { useState } from "react";
import style from "./AddServiceModal.module.css";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { addServices } from "../../../store/servicesSlice";

const AddServiceModal = ({ modal, setModal }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [price_medium, setPriceMedium] = useState("");
  const [price_high, setPriceHigh] = useState("");
  const [service_time, setServiceTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(title === '' || price === '' || price_medium === '' || price_high === '' || service_time === '') {
      setErrorMessage("Заполните все обязательные поля!");
    } else {
      setErrorMessage("");
      dispatch(addServices([title, price, price_medium, price_high, service_time]));
      setModal(false);
      setTitle('')
      setPrice('')
      setPriceMedium('')
      setPriceHigh('')
      setServiceTime('')
    }
  };

  return (
    <div>
        <div className={style.modal} onClick={() => setModal(!modal)}>
          <div className={style.modal_body} onClick={e => e.stopPropagation()}>
            <span className={style.close} onClick={() => setModal(!modal)}>
              &times;
            </span>
            <h2>Добавить новую услугу</h2>
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
              <br/>
              <div className={style.error}>{errorMessage}</div>
              <MyButton onClick={handleAdd}>Добавить</MyButton>
            </div>
        </div>   
    </div>
  );
};

export default AddServiceModal;
