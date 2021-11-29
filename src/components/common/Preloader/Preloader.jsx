import React from "react";
import s from './Preloader.module.css';
import preloaderSVG from './../../../assets/images/preloader/Double Ring-2.6s-200px.svg'

const Preloader = () => {
  return (
    <div className={s.preloaderBlock}>
      <img className={s.preloader} src={preloaderSVG} />
    </div>
  );
};

export default Preloader;
