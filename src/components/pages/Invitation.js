import { motion } from 'framer-motion';
import React from 'react';
import { useParams } from 'react-router';
import ImageCincin from '../../images/pasangcincin.jpg';

export default function Invitation({ handlerOnClick, show }) {
  let { name } = useParams();
  const divVariants = {
    expanded: {
      height: '100vh',
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    collapsed: {
      height: '100%',
      width: '0%',
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      layout
      variants={divVariants}
      animate="expanded"
      initial="collapsed"
      className="relative h-screen bg-apps-secondary">
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col absolute top-2 inset-x-0 z-10 justify-center items-center">
        <h1 className="text-center text-white text-6xl font-handwrite mt-20">
          Frisca & Muchtar
        </h1>
        <h2 className="text-white tracking-wider text-center text-sm font-light w-64">
          Sebuah kisah akhir untuk perjalanan selanjutnya...
        </h2>
      </motion.div>
      <motion.div className="absolute inset-0">
        <img
          loading="lazy"
          alt="Cincin"
          className="h-full w-full object-center object-cover"
          src={ImageCincin}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      </motion.div>
      <div className="relative px-2 py-28 h-full">
        <div className="flex flex-col justify-between items-center h-full">
          <div></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col gap-1 justify-center items-center">
            <h2 className="text-sm font-light text-gray-300 text-center w-64">
              Kepada, Yth.
              <br />
              Bapak / Ibu / Saudara / i :
            </h2>
            <h1 className="text-center text-white text-5xl font-handwrite mt-2">
              {name ?? 'Nama Undangan'}
            </h1>
            <h2 className="text-sm font-light text-gray-300 text-center w-64 mt-4 hidden">
              we will get married soon and be a part of our special day.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="flex justify-center items-center mt-6">
              <button
                className="text-apps-red hover:text-apps-secondary hover:border-apps-primary hover:bg-apps-primary transition-all duration-300 background-transparent font-bold capitalize tracking-wider px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear text-white border border-gray-200 rounded-md flex justify-center items-center"
                onClick={handlerOnClick}
                type="button">
                Open Invitation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
