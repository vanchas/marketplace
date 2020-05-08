import React, { useEffect, useState } from "react";
import './App.scss';
import Logo from '../../assets/egolist-logo.png';
import $ from 'jquery';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <div className="pwa-wrapper">
      <div className="pwa-content">
        <div className="pwa-img">
          <img src={Logo} alt="Egolist" />
        </div>
        <div className="pwa-text">
          <h3>EGOLIST</h3>
          <p>www.egolist.com</p>
        </div>
        <div className="pwa-close-btn">
          <button
            onClick={() => $('.pwa-wrapper').slideDown()}
          >&#215;</button>
        </div>
      </div>
      <div className="pwa-add-btn">
        <button
          id="setup_button"
          aria-label="Install app"
          title="Install app"
          onClick={onClick}
        >
          Добавить на домашний экран
        </button>
      </div>
    </div>
  );
};

export default InstallPWA;
