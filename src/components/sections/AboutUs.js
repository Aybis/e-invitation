import React from 'react';
import ImageFrisca from '../../images/frisca.png';
import ImageMuchtar from '../../images/muchtar.png';

export default function AboutUs() {
  return (
    <div className="h-auto px-4 py-8 bg-white">
      <div className="md:flex md:items-center md:justify-between mb-4 text-center">
        <h2 className="text-2xl font-bold text-apps-secondary tracking-wide">
          About Us
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <img
            src={ImageFrisca}
            alt="myfrisca"
            className="h-96 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center -mt-4">
          <h1 className="text-lg font-semibold text-apps-secondary">
            Frisca Ayuning Putri
          </h1>
          <h2 className="text-sm text-gray-400">Putri Pertama dari:</h2>
          <h1 className="text-sm font-medium text-gray-600">
            Bapak Agus Susanto
          </h1>
          <h1 className="text-sm font-medium text-gray-600">Ibu Supatmi</h1>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex justify-center items-center">
          <img
            src={ImageMuchtar}
            alt="muchtar"
            className="h-96 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center -mt-4">
          <h1 className="text-lg font-semibold text-apps-secondary">
            Abdul Muchtar Astria
          </h1>
          <h2 className="text-sm text-gray-400">Putra Pertama dari:</h2>
          <h1 className="text-sm font-medium text-gray-600">Bapak Tugimin</h1>
          <h1 className="text-sm font-medium text-gray-600">
            Ibu Dwi Hastuti Ningsih
          </h1>
        </div>
      </div>
      <hr className="mt-8 border-gray-200 mx-14" />
    </div>
  );
}
