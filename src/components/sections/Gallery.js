import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ImageOne from '../../images/1.jpg';
import ImageTwo from '../../images/2.JPG';
import ImageThree from '../../images/3.jpg';
import ImageFour from '../../images/4.jpg';
import ImageFive from '../../images/5.jpg';
import ModalImage from '../atoms/ModalImage';

const Gallery = () => {
  // We will start by storing the index of the current image in the state.
  const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];

  const [image, setimage] = useState(null);
  const [showModal, setshowModal] = useState(false);

  const handlerOnClick = (value) => {
    setshowModal(true);
    setimage(value);
  };

  return (
    // Images are placed using inline flex. We then wrap an image in a div
    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
    // Finally the image itself will be 100% of a parent div. Outer div is
    // set with position relative, so we can place our cotrol buttons using
    // absolute positioning on each side of the image.
    <div className="flex flex-col justify-center w-full items-center pt-8">
      <hr className=" border-gray-200 mx-14" />

      <ModalImage
        show={showModal}
        setOpen={() => setshowModal(false)}
        image={image}
      />
      <div className="md:flex md:items-center md:justify-between pb-4 text-center flex">
        <h2 className="text-xl font-semibold text-apps-secondary tracking-wide">
          Our Gallery
        </h2>
      </div>
      <div className="relative w-full mt-2">
        <div className="flex overflow-x-auto hidden-scroll gap-6 px-4 py-8">
          {images.map((image) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={Math.random()}
              onClick={() => handlerOnClick(image)}
              className="relative flex flex-none">
              <img
                alt={image}
                loading="lazy"
                className="rounded-lg w-full object-contain h-96 shadow-xl"
                src={image}
              />
              <motion.div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-600 mix-blend-multiply rounded-lg">
                <span className="absolute bottom-2 text-center text-white w-full text-xl font-handwrite">
                  Frisca & Muchtar
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
