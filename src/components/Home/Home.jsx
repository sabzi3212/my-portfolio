import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-orange-400'>Hi, My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Sabbir Ahmed</h1>
                <h2 className='text-4xl font-bold text-gray-500 max-w-[1000px]'>I'm a junior frontend developer specializing in building (and occasionally designing) exceptional digital experiences. I'm focoused on building responsive web applications.
                </h2>
                <div>
                <button className="btn btn-ghost group text-white border-2 px-6 pt-2 flex items-center hover:bg-orange-400 hover:border-orange-400">View Work
                <span className='group-hover:rotate-90 duration-300'><FaArrowRight></FaArrowRight></span>
                 </button>
                </div>

            </div>
            
        </div>
    );
};

export default Home;