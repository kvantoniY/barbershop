import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Masters.module.css";
import MyButton from "../../UI/MyButton/MyButton";
import { CSSTransition } from "react-transition-group";
import AddMasterModal from "../modals/AddMasterModal/AddMasterModal";
import EditMasterModal from "../modals/EditMasterModal/EditMasterModal";
import { useDispatch, useSelector } from "react-redux";
import { getMasters } from "../../store/mastersSlice";
import Master from "./Master";

import MyNotice from "../../UI/MyNotice/MyNotice";

const Masters = () => {
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(false);
  const isAdmin = localStorage.getItem("auth");
  const [selectMasterModal, setSelectMasterModal] = useState({});
  const noticeRef = useRef(null);
  const addModalRef = useRef(null);
  const editModalRef = useRef(null);

  const dispatch = useDispatch();

  // getting masters from server
  useEffect(() => {
    dispatch(getMasters());
  }, [dispatch]);

  // Redux state masters
  const { completed, error, masters, loading } = useSelector(
    (state) => state.masters
  );
      // notice
  useEffect(() => {
    if ( completed ) {
      setNoticeVisible(true);
      setTimeout(() => {
        setNoticeVisible(false);
      }, 3000);
    }
  }, [completed]);
  const handleEditMasterModal = (master) => {
    setSelectMasterModal(master);
    setEditModal(true);
  };

  // slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow rotate-180"><img src={require("../../assets/next.png")} alt="" srcset="" width={30} height={30}/></div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"><img src={require("../../assets/next.png")} alt="" srcset="" width={30} height={30}/></div>
      </div>
    ),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          arrows: false
        },
      },
    ],

  };

  return (
    <section className={style.master_container}  id='masters'>
      <div className="container">

        <Slider {...settings} className={style.slider}>
          {
          masters.length > 0 ?
          masters.map((master) => (
            <Master
              master={master}
              isAdmin={isAdmin}
              handleEditMasterModal={handleEditMasterModal}
              key={master.id}
            />
          ))
        : 
        <div>Список мастеров пуст</div>
        }
         
        </Slider>

        <CSSTransition
          nodeRef={editModalRef}
          in={editModal}
          timeout={300}
          classNames="my-node"
          unmountOnExit
        >
          <div ref={editModalRef}>
            <EditMasterModal
              modal={editModal}
              setModal={setEditModal}
              master={selectMasterModal}
            />
          </div>
        </CSSTransition>

        <CSSTransition
          nodeRef={addModalRef}
          in={addModal}
          timeout={300}
          classNames="my-node"
          unmountOnExit
        >
          <div ref={addModalRef}>
            <AddMasterModal
              modal={addModal}
              setModal={setAddModal}
            />
          </div>
        </CSSTransition>

        {isAdmin === 'true' ? (
          <MyButton onClick={() => setAddModal(true)}>
            Добавить мастера
          </MyButton>
        ) : (
          ""
        )}
              <CSSTransition nodeRef={noticeRef} in={noticeVisible} timeout={3000} classNames="my-node" unmountOnExit>
          <div ref={noticeRef}>
            <MyNotice error={error ? true : false} noticeVisible={noticeVisible} setNoticeVisible={setNoticeVisible}>{completed}</MyNotice> 
          </div>
      </CSSTransition>
      </div>
    </section>
  );
};

export default Masters;
