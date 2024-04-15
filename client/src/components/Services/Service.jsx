import React, { useRef, useState } from "react";
import EditServiceModal from "../modals/EditServiceModal/EditServiceModal";
import { CSSTransition } from "react-transition-group";
import style from "./Services.module.css";

const Service = ({ service, serviceLevel}) => {
  const [modal, setModal] = useState(false);
  const isAdmin = localStorage.getItem("auth");
  const editModalRef = useRef(null);

  return (
    <div className={style.background}>
      <div className={style.service}>
        {/* Title */}
        <div className={style.title}>{service.title}</div>

        {/* Time */}
        <div className={style.time_block}>{service.time} мин</div>

        {/* Price depending on level */}
        <div>
          {/* Low price */}
          <div
            className={`${style.price} ${
              serviceLevel === "low" ? style.priceActive : ""
            }`}
          >
            {service.price} ₽
          </div>

          {/* Medium price */}
          <div
            className={`${style.price} ${
              serviceLevel === "medium" ? style.priceActive : ""
            }`}
          >
            {service.price_medium} ₽
          </div>

          {/* High price */}
          <div
            className={`${style.price} ${
              serviceLevel === "high" ? style.priceActive : ""
            }`}
          >
            {service.price_high} ₽
          </div>

          {/* Edit span */}
          {isAdmin === 'true' ? (
            <div className={style.edit}>
              <img
                src={require("../../assets/edit.png")}
                alt="edit"
                width={25}
                height={25}
                onClick={() => setModal(!modal)}
              />
            </div>
          ) : (
            ""
          )}

        </div>
      </div>

      {/* Edit Modal */}

        <CSSTransition
          nodeRef={editModalRef}
          in={modal}
          timeout={300}
          classNames="my-node"
          unmountOnExit
        >
          <div ref={editModalRef}>
            <EditServiceModal
              modal={modal}
              setModal={setModal}
              service={service}
            />
          </div>
        </CSSTransition>
      
    </div>
  );
};

export default Service;
