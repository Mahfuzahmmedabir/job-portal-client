import React from 'react';
import { easeOut, motion } from 'framer-motion';

import imgOne from '../../assets/happy.jpg';
import imgTow from '../../assets/54754.jpg';
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={imgOne}
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl "
            />
            <motion.img
              src={imgTow}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 5, delay: 5, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl "
            />
          </div>

          <div className="flex-1">
            <motion.h1
              animate={{ x: [100, 50, 100] }}
              transition={{
                duration: 10,
                delay: 5,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Latest{' '}
              <motion.span animate={{ color: ['red', 'blue'] }}>
                job
              </motion.span>{' '}
              for you
            </motion.h1>

            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
