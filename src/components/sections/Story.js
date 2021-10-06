import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ImageOne from '../../images/DSC09815.jpg';
import Logo from '../../images/icon-144.png';
import Modal from '../atoms/Modal';

export default function Story() {
  const dataStory = [
    {
      name: '2012',
      title: 'Begin of Our Story!',
      description: `
        <p>
        Awal pertemuan kami tak seindah kisah romansa bertajuk cinta, Biasa saja, tak ada yang istimewa, bertepat di SMA 5 di gedung baru Lantai 3. Kisah awal kedekatan kami semakin terasa. Setiap hari tidak pernah absen bertukar cerita, hingga pada suatu ketika kami memutuskan menjalin hubungan  pada tanggal <b> 12-12-2012</b> .</p>`,
      imageSrc: ImageOne,
      imageAlt: ImageOne,
    },
    {
      name: '2014',
      title: 'Attack of Titans!',
      description: `<p>
      Tak terasa <b> 2 tahun </b> berlalu, Dia dipilih untuk menjadi Putra daerah di Bogor, sedangkan saya ditarik secara paksa ke tempat orang tua saya di Semarang. 
      kami melanjutkan hubungan ini secara LDR terpisah jarak sejauh 473,4 KM. Melanjtukan pendidikan, berjuang untuk meraih cita cita, menggapai impian.
      </p> 
        <b>Dan disinilah ego kami dipertaruhkan !!!</b>`,
      imageSrc: ImageOne,
      imageAlt: 'Simbolis',
    },
    {
      name: '2018',
      title: 'Utopia or Distopia!',
      description: `
      <p>Wahh akhirnya kami LuLuss 🎓 saatnya kami kembali dari jarak ini, kembali melangkah lebih tinggi, berada di fase transisi. untuk menjadi sosok yang lebih baik. Seseorang akan berubah. Pesan kami, jangan pergi.. Biasakan lahh !. 2 kata yang kami peggang <b>"Bertahan"</b> dan <b>"Berjuang"</b>. 💪💪 </p>`,
      imageSrc: ImageOne,
      imageAlt: 'Simbolis',
    },
    {
      name: '2021',
      title: 'One Step Closer !',
      description: `
        <span>
        One step Closer,<b> 12-09-2021</b> kami mempertemukan dua keluarga, setelah <b>9 Tahun</b> lamanya kami bersama, tanpa mengira bahwa ikatan kami sekuat ini. Kami sadar masi banyak hal yang perlu dibenahi, diperbaiki, namun kekurangan masing masing dari kami tidak akan pernah menjadi masalah dan tidak akan terlihat 🥰.
        </span>`,
      imageSrc: ImageOne,
      imageAlt: 'Simbolis',
    },
  ];

  const [showModal, setshowModal] = useState(false);
  const [story, setstory] = useState([]);

  const handlerClickShowModal = (item) => {
    setshowModal(true);
    setstory(item);
  };
  return (
    <div className="relative py-4">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-apps-secondary text-xl font-semibold tracking-wide">
          Our Story
        </h1>
      </div>
      <Modal
        title={story.title}
        setOpen={() => setshowModal(false)}
        show={showModal}
        image={story.imageSrc}
        year={story.name}
        content={story.description}></Modal>
      <div className="relative p-6">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="col-start-2 row-start-2 flex justify-center items-center">
            <img src={Logo} alt="logo" className="h-24 w-24 rounded-md" />
          </div>
          {dataStory.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlerClickShowModal(item)}
              key={Math.random()}
              className={`flex  items-center border-2 rounded-lg p-3 border-gray-200 ${
                index === 0 || index === 3
                  ? 'col-span-2 row-span-1 gap-4 '
                  : 'col-span-1 row-span-2 flex-col justify-center gap-3'
              }`}>
              <img
                src={item.imageSrc}
                alt={item.imageSrc}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div
                className={`flex flex-col justify-center ${
                  index === 0 || index === 3
                    ? ''
                    : 'items-center text-center w-2/3'
                }`}>
                <h1 className="text-gray-500 font-normal tracking-wide">
                  {item.name}
                </h1>
                <h1 className="text-sm text-apps-secondary font-semibold tracking-wide">
                  {item.title}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="mt-8 border-gray-200 mx-14" />
    </div>
  );
}
