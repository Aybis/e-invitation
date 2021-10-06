import { DuplicateIcon } from '@heroicons/react/outline';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { v1 as uuidv1 } from 'uuid';
import dataJson from '../../json/data';
import Data from '../../json/db.json';

export default function Cuan() {
  let { name } = useParams();
  const dataRekening = dataJson.dataRekening;
  const [showToolTip, setshowToolTip] = useState(false);
  const [setIndex, setsetIndex] = useState(null);

  const [state, setstate] = useState({
    nama: '',
    message: '',
  });

  const handlerChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handlerOnClick = (item) => {
    navigator.clipboard.writeText(item.noRek);
    setsetIndex(item.id);
    setshowToolTip(true);
    setTimeout(() => {
      setshowToolTip(false);
    }, 500);
  };

  const [data, setData] = useState(Data);
  var fs = require('fs');
  const [loading, setloading] = useState(false);

  // const fs = require('fs');

  const newPost = {
    id: uuidv1(),
    name: state.nama,
    message: state.message,
  };

  const WriteTextToFileAsync = (contentToWrite) => {
    fs.writeFile('./testing.json', contentToWrite, (err) => {
      // console.log(contentToWrite);
      if (err) {
        console.log(err);
      } else {
        setloading(false);
        console.log('Done writing to file...');
      }
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    let posts = [...data, newPost];
    setData(posts);
    setloading(false);

    // WriteTextToFileAsync(posts);
  };

  useEffect(() => {
    // console.log('two', data);
  }, [data]);
  return (
    <div className="pt-6">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-2xl font-bold text-apps-secondary tracking-wide">
          Gift & Card
        </h2>
        <h3 className="text-sm font-light mt-2 px-12 tracking-wide leading-relaxed text-gray-500">
          Bagi yang ingin memberikan angpau sebagai hadiah untuk pernikahan
          kami, silahkan transker ke rekening ya
        </h3>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto  px-4">
          <div className="mt-6 grid grid-cols-2 gap-4">
            {dataRekening.map((item) =>
              item.name === 'Whatsapp' ? (
                <div
                  key={Math.random()}
                  className="col-span-1 flex flex-col gap-4 justify-center items-center  py-8 px-2 bg-gray-50 rounded-md">
                  <img
                    src={item.imageSrc}
                    alt={item.imageSrc}
                    className="h-12 rounded-md object-cover"
                  />
                  <p className="text-xs text-center tracking-wide leading-relaxed">
                    Untuk konfirmasi pengiriman Angpau boleh ke nomor Whatsapp.
                  </p>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://wa.me/6285157569440?text=Saya ${
                      state.nama ?? name
                    }, barusan Saya sudah mengirim angpau ke Anda, berikut bukti transfernya. Selamat Berbahagia Frisca & Muchtar . `}
                    className="text-apps-secondary font-semibold flex gap-2 border border-apps-secondary py-2 px-4 text-xs rounded-md">
                    <PaperAirplaneIcon className="h-4 w-4 text-apps-secondary transform rotate-45" />
                    Send to Me
                  </a>
                </div>
              ) : (
                <div
                  key={Math.random()}
                  className="col-span-1 flex flex-col items-center gap-2 py-4 px-4 bg-gray-50 rounded-md">
                  <div className="p-2  rounded-md">
                    <img
                      src={item.imageSrc}
                      alt={item.imageSrc}
                      className="h-24 rounded-md object-cover"
                    />
                  </div>
                  {showToolTip && item.id === setIndex ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="bg-apps-secondary text-white px-4 py-2 rounded-md w-32 absolute mt-40 ml-20 transition-all duration-300 ease-in-out">
                      Text Copied!
                    </motion.div>
                  ) : (
                    ''
                  )}
                  <div className="flex items-center gap-2">
                    <DuplicateIcon
                      onClick={() => handlerOnClick(item)}
                      className="h-4 w-4 text-apps-secondary cursor-pointer"
                    />
                    <div
                      className="mx-auto max-w-sm p-2 select-all text-center font-semibold text-sm -ml-2"
                      onClick={() => handlerOnClick(item)}>
                      {item.noRek}
                    </div>
                  </div>
                  <p className="text-apps-secondary  text-sm text-center">
                    {item.name}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      {/* <Message
        handlerChange={handlerChange}
        nama={state.nama}
        message={state.message}
      /> */}
      <div className="relative my-8">
        <h1 className="text-center text-xl font-bold text-apps-secondary">
          Send a Message
        </h1>
        <form
          className="flex flex-col gap-6 px-8 py-6 w-full"
          onSubmit={handlerSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-gray-500 font-semibold text-sm tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="nama"
              placeholder={state.nama}
              value={state.nama}
              onChange={handlerChange}
              className="py-2 px-6 border-2 border-gray-100 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Message"
              className="text-gray-500 font-semibold text-sm tracking-wide">
              Message
            </label>
            <textarea
              type="text"
              placeholder="Type a Message"
              value={state.message}
              name="message"
              onChange={handlerChange}
              className="py-2 px-6 border-2 border-gray-200 rounded-md w-full"></textarea>
          </div>
          <button className="bg-apps-secondary px-6 py-3 rounded-md flex justify-center items-center text-white font-semibold">
            Send
          </button>
        </form>
      </div>

      <div className="relative my-4 p-4">
        {!loading
          ? data
            ? data.map((post) => {
                return (
                  <div key={post.id} className="post">
                    <h3>{post.name}</h3>
                    <p>{post.message}</p>
                  </div>
                );
              })
            : null
          : 'Loading ....'}
      </div>
    </div>
  );
}
