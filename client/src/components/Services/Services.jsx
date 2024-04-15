import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../store/servicesSlice";
import AddServiceModal from "../modals/AddServiceModal/AddServiceModal";
import ServicesContent from "../ServicesContent/ServicesContent";
import MyButton from "../../UI/MyButton/MyButton";
import MyNotice from "../../UI/MyNotice/MyNotice"
import style from "./Services.module.css";
import { CSSTransition } from "react-transition-group";

const Services = () => {
  
  const [modal, setModal] = useState(false);
  const [serviceLevel, setServiceLevel] = useState("high");
  const isAdmin = localStorage.getItem("auth");
  const addModalRef = useRef(null);
  const [noticeVisible, setNoticeVisible] = useState(false);
  const noticeRef = useRef(null);
  // Redux state
  const { completed, error, services} = useSelector(
    (state) => state.services
  );

  const dispatch = useDispatch();
  // notice
  useEffect(() => {
    if ( completed ) {
      setNoticeVisible(true);
      setTimeout(() => {
        setNoticeVisible(false);
      }, 3000);
    }
  }, [completed]);
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <section className={style.services} id='services'>
      <div className="container">

        <h2>Основные услуги</h2>

        <div className={style.changeLevel}>
          <MyButton className={style.changeLevel_button} onClick={() => setServiceLevel("low")}>Мастер</MyButton>
          <MyButton className={style.changeLevel_button} onClick={() => setServiceLevel("medium")}>Старший мастер</MyButton>
          <MyButton className={style.changeLevel_button} onClick={() => setServiceLevel("high")}>Шеф мастер</MyButton>
        </div>

        <ServicesContent
          services={services}
          serviceLevel={serviceLevel}
        />

        <br />

        <MyButton>Записаться</MyButton>

        {isAdmin === 'true' ? (
          <MyButton onClick={() => setModal(true)} id={style.addService}>
            Добавить услугу
          </MyButton>
        ) : (
          ""
        )}
      </div>
      
      {/* Add Modal */}
      <CSSTransition
        nodeRef={addModalRef}
        in={modal}
        timeout={300}
        classNames="my-node"
        unmountOnExit
      >
        <div ref={addModalRef}>
          <AddServiceModal
            modal={modal}
            setModal={setModal}
          />
        </div>
      </CSSTransition>
      <CSSTransition nodeRef={noticeRef} in={noticeVisible} timeout={3000} classNames="my-node" unmountOnExit>
          <div ref={noticeRef}>
            <MyNotice error={error ? true : false} noticeVisible={noticeVisible} setNoticeVisible={setNoticeVisible}>{completed}</MyNotice> 
          </div>
      </CSSTransition>
    </section>
  );
};

export default Services;
