import React from "react";
import Service from "../Services/Service";
import style from "./ServicesContent.module.css";

const ServicesContent = ({ services, upload, serviceLevel }) => {
  return (
    <div className={style.services_content}>
      <div className={style.services_content_text}>
        <span>Название</span>
        <span>Время</span>
        <span>Цена</span>
      </div>
      {
      services.length > 0 ?
      services.map((service) => (
        <Service
          service={service}
          upload={upload}
          serviceLevel={serviceLevel}
          key={service.id}
        />
      ))
        : 
        <div className={style.empty}>Список услуг пуст</div>
        }
    </div>
  );
};

export default ServicesContent;
