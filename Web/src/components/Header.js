/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';





export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { i18n, t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/">{t('Ana Sayfa')}</Link>
          <Link to="/political">{t('Politik')}</Link>
          <Link to="/sport">{t('Spor')}</Link>
          <Link to="/business">{t('İş')}</Link>
          <Link to="/general">{t('Genel')}</Link>

        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
