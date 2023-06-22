import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-orange-400 mb-3'>Hi, My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white mb-3'>
                    <Typewriter
                        options={{
                            strings: ['Sabbir Ahmed'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <h2 className='text-4xl font-bold text-gray-500 max-w-[1000px] mb-3'>I'm a junior frontend developer specializing in building (and occasionally designing) exceptional digital experiences.
                </h2>
                <div>
                    <button className="btn btn-ghost group text-white border-2 px-6 pt-2 flex items-center hover:bg-orange-400 hover:border-orange-400">
                    <span className='group-hover:rotate-90 duration-300'><FaArrowRight>
                            </FaArrowRight></span>
                        <Link to="projects" smooth={true} duration={500}>
                            View Work
                            
                        </Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Home;