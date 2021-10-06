import { motion } from 'framer-motion';
import ImageCincin from '../../images/cincin.jpeg';
export default function Jumbotron() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative " style={{ height: '93vh' }}>
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex absolute top-2 inset-x-0 z-10 justify-center items-center">
            <h1 className="text-white font-handwrite text-4xl font-medium mt-20 tracking-wide">
              The Wedding Of
            </h1>
          </motion.div>
          <div className="absolute inset-0">
            <img
              alt="Cincin"
              className="h-full w-full object-center object-cover"
              src={ImageCincin}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative px-2 py-24 sm:px-6 sm:py-20 lg:py-32 lg:px-8 h-full">
            <div className="flex flex-col justify-between items-center h-full">
              <div></div>
              <motion.div
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-1">
                <h1 className="text-center text-white text-6xl font-handwrite">
                  Frisca & Muchtar
                </h1>
                <div className="grid grid-cols-3 mt-2 gap-2 text-white p-2 -mx-8">
                  <div className="flex flex-col justify-center items-center gap-1 ">
                    <h1 className="text-sm font-semibold tracking-wide">
                      17 Oktober
                    </h1>
                    <h2 className="text-sm font-light tracking-wide text-gray-200">
                      2021
                    </h2>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-sm font-semibold tracking-wider">
                      Karawang,{' '}
                    </h1>
                    <h2 className="text-sm font-light tracking-wide text-gray-200">
                      West Java
                    </h2>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-sm font-semibold tracking-wide">
                      09.00 AM
                    </h1>
                    <h2 className="text-sm font-light tracking-wide text-gray-200">
                      - done.
                    </h2>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
