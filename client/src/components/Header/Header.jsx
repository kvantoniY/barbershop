import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, animateScroll } from "react-scroll";

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={style.header}>
      <header className="container">
        <div>
          <img
            src={require("../../assets/logo_header.png")}
            width={100}
            height={100}
            className={style.logo}
          />
        </div>
        <nav className={`${style.nav} ${isOpen ? style.active : ""}`}>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
            className={style.nav__item}
          >
            Главная
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
            className={style.nav__item}
          >
            Услуги
          </Link>
          <Link
            to="masters"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
            className={style.nav__item}
          >
            Мастера
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
            className={style.nav__item}
          >
            О нас
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-110}
            duration={1000}
            className={style.nav__item}
          >
            Контакты
          </Link>
        </nav>
        <img src={require("../../assets/burger_menu.png")} className={style.header_button} onClick={() => setOpen(!isOpen)} />
      </header>
    </div>
  );
};

export default Header;
