import React from "react";
import style from "./Footer.module.css";
import { Link, animateScroll } from "react-scroll";

const Footer = () => {
  return (
    <section className={style.footer_block} id='contacts'>
      <div className="container">
        <div className={style.footer_columns}>
          <div>
            <img
              src={require("../../assets/logo_header.png")}
              className={style.logo}
              alt="logo"
            />
          </div>
          <div className={style.footer_info}>
            <span>© Barbershop</span>
            <span>® 2013 - 2024 «Barbershop»</span>
            <u>Политика конфиденциальности</u>
            <div className={style.socials}>
            <img
              src={require("../../assets/vk.png")}
              alt="vk"
            />
            <img
              src={require("../../assets/tg.png")}
              alt="vk"
            />
            <img
              src={require("../../assets/youtube.png")}
              alt="vk"
            />
            </div>
          </div>

          <nav>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
          >
            Главная
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
          >
            Услуги
          </Link>
          <Link
            to="masters"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
          >
            Мастера
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
          >
            О нас
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
          >
            Контакты
          </Link>
        </nav>
         
        </div>
      </div>
    </section>
  );
};

export default Footer;
