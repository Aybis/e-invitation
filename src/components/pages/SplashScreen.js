import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Loading from '../atoms/Loading';

export default function SplashScreen() {
  return (
    <CSSTransition
      in={true}
      timeout={1000}
      classNames="alert"
      unmountOnExit
      exit={true}>
      <div className="h-screen bg-white flex flex-col justify-center items-center">
        <Loading />
        <div className="flex flex-col justify-center items-center gap-4 mt-20">
          <h1 className="text-apps-secondary font-handwrite text-3xl font-medium tracking-wide">
            The Wedding Of
          </h1>
          <h1 className="text-center text-apps-secondary text-6xl font-handwrite">
            Frisca & Muchtar
          </h1>
          <h2 className="text-apps-secondary tracking-wider text-center text-sm font-light px-12">
            Sebuah kisah akhir untuk perjalanan selanjutnya...
          </h2>
        </div>
      </div>
    </CSSTransition>
  );
}
