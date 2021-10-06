import { motion } from 'framer-motion';
import React from 'react';
import dataJson from '../../json/data';

export default function Protokol() {
  const dataProtokol = dataJson.dataProtokol;

  return (
    <div className="h-full px-4 py-8 bg-apps-secondary">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Protokol Kesehatan
        </h2>
        <h4 className="text-sm font-light tracking-wide text-opacity-70 text-center text-white mt-2">
          Acara ini akan dilaksanakan dengan protokol kesehatan untuk mencegah
          penularan Covid-19.
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 py-2 transition-all duration-300 ease-in-out">
        {dataProtokol.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={Math.random()}
            className="flex flex-none items-center flex-col gap-2">
            <div className="flex p-2 rounded-lg justify-center items-center border bg-white">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="h-14 w-14"
              />
            </div>
            <h1 className="text-sm font-medium text-white w-24 text-center">
              {item.name}
            </h1>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-4 mt-6">
        <h1 className="text-sm font-light tracking-wide text-white text-center text-opacity-70">
          Dan diantara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu mendapat ketenangan
          hati. Dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya
          yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
          berfikir.
        </h1>
        <h2 className="font-semibold tracking-wide text-sm text-white">
          QS. Ar-Rum : 21
        </h2>
      </div>
      <hr className="mt-4 border-apps-primary mx-14" />
    </div>
  );
}
