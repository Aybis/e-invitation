import {
  HeartIcon,
  GiftIcon,
  LocationMarkerIcon,
  ViewGridAddIcon,
} from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';

export default function Menu() {
  return (
    <motion.nav className="fixed z-30 bottom-6 w-full ">
      <motion.div className="grid grid-cols-4 bg-warmGray-50 shadow-xl py-4 rounded-2xl mx-8 border-t-2">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          className="flex flex-col gap-1 text-gray-300 justify-center items-center py-2 px-4 transition-all duration-300 rounded-lg">
          <HeartIcon className={`h-5 w-5 `} />
        </Link>
        <Link
          to="story"
          spy={true}
          smooth={true}
          className="flex flex-col gap-1 text-gray-300 justify-center items-center py-2 px-4 transition-all duration-300 rounded-lg">
          <ViewGridAddIcon className={`h-5 w-5 `} />
        </Link>
        <Link
          to="location"
          spy={true}
          smooth={true}
          className="flex flex-col gap-1 text-gray-300 justify-center items-center py-2 px-4 transition-all duration-300 rounded-lg">
          <LocationMarkerIcon className={`h-5 w-5`} />
        </Link>
        <Link
          to="cuan"
          spy={true}
          smooth={true}
          className="flex flex-col gap-1 text-gray-300 justify-center items-center py-2 px-4 transition-all duration-300 rounded-lg">
          <GiftIcon className={`h-5 w-5 `} />
        </Link>
      </motion.div>
    </motion.nav>
  );
}
