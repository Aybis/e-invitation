import { motion } from 'framer-motion';
import React from 'react';
import AboutUs from '../sections/AboutUs';
import Cuan from '../sections/Cuan';
import Gallery from '../sections/Gallery';
import Jumbotron from '../sections/Jumbotron';
import Location from '../sections/Location';
import Menu from '../sections/Menu';
import Protokol from '../sections/Protokol';
import Story from '../sections/Story';

function Home() {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen max-h-full bg-white">
      <Menu />
      <div id="home" className="relative">
        <Jumbotron />
        <AboutUs />
      </div>

      {/* Story Section */}
      <div id="story" className="relative bg-white py-8">
        <Story />
        <Gallery />
      </div>
      {/* Story Section */}

      {/* Location Section */}
      <div id="location" className="bg-apps-secondary relative">
        <Location />
        {/* Protokol Kesehatan */}
        <Protokol />
        {/* Protokol Kesehatan */}
      </div>

      {/* End Location Section */}
      <div id="cuan" className="bg-white pb-32 py-4">
        <Cuan />
      </div>
    </motion.div>
  );
}

export default Home;
