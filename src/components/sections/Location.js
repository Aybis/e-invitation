import { LocationMarkerIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import React from 'react';
import ButtonCalendar from '../atoms/ButtonCalendar';

const Location = () => {
  return (
    <motion.div
      className="bg-apps-secondary px-4 py-8"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}>
      <div className="md:flex mb-4">
        <h2 className="text-xl font-bold text-white text-left">
          Location and Event
        </h2>
      </div>
      <div className="flex flex-col mt-8">
        <h1 className="text-white  font-semibold tracking-wider text-center">
          Minggu, 17 Oktober 2021
        </h1>
        <ButtonCalendar />
        <div className="flex justify-between items-center mt-6 text-white px-4">
          <div className="flex flex-col p-4 justify-center items-center gap-2">
            <h2 className="font-handwrite tracking-wider font-medium text-3xl">
              Akad Nikah
            </h2>
            <h3 className="text-xs font-light tracking-wide">
              pukul 09.00 - 10.00 WIB
            </h3>
          </div>
          <div className="flex flex-col p-4 justify-center items-center gap-2">
            <h2 className="font-handwrite font-medium text-3xl tracking-wider">
              Resepsi
            </h2>
            <h3 className="text-xs font-light tracking-wide">
              pukul 11.00 - 17.00 WIB
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white mt-6">
          <h1 className="font-light tracking-wide">
            di <span className="font-bold">Kediaman Mempelai Wanita</span>{' '}
          </h1>
          <h2 className="text-sm font-light tracking-wide text-opacity-70">
            Griya Pesona Asri, A7 No.26 B, RT. 36 RW. 18,
          </h2>
          <h2 className="text-sm font-light tracking-wide text-opacity-70">
            Kel. Duren, Kec. Klari, Kab. Karawang
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <a
            href="https://maps.app.goo.gl/azAXtvvjCjpKjEG78"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 mt-8 rounded-lg text-white font-semibold border border-white flex gap-2 items-center">
            <LocationMarkerIcon className="h-4 w-4 text-white animate-bounce" />
            Go to location
          </a>
        </div>
        <div className="flex mt-8 text-white justify-center items-center">
          <h1 className="text-center font-light text-sm tracking-wide">
            Suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            putra - putri kami.
          </h1>
        </div>
      </div>
      <hr className="mt-8 border-apps-primary mx-14" />
    </motion.div>
  );
};

export default Location;
