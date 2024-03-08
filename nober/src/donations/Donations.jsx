import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../home/NavBar';
import Footer from '../home/Footer';

const Donations = () => {
  return (
    <div className='bg-purple-00'>
    <NavBar/>
    <div className="flex flex-col items-center justify-center h-screen">
    
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-blue-500 text-white p-6 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold mb-4">Why Donate to Us?</h1>
        <p className="text-lg mb-4">
          Donations play a crucial role in supporting welfare programs and
          initiatives.
        </p>
        <p className="text-lg">
          Your contributions can make a significant impact on the lives of
          those in need.
        </p>
        <p>Donate To:</p>
        <ol className='list-disc pl-4'>
        <li>Help someone in sickness</li>
        <li>Offer Decent Sendoff to the deceased</li>
        <li>Help Educate A person</li>
        </ol>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="bg-green-500 text-white p-6 rounded-lg shadow-md mt-8"
      >
        <h2 className="text-2xl font-bold mb-4">Accepted Donations</h2>
        <ul className="list-disc pl-6">
          <li className="text-lg mb-2">Monetary Contributions</li>
          <li className="text-lg mb-2">Food Donations</li>
          <li className="text-lg mb-2">Clothing Donations</li>
          <li className="text-lg mb-2">Volunteer Time</li>
          <li className="text-lg">Other Essential Items</li>
        </ul>
      </motion.div>
    </div>
<Footer/>
    </div>
  );
};

export default Donations;
