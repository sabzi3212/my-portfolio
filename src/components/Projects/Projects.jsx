import React from 'react';
import project1 from '../../assets/projects/Screenshot1.png';
import project2 from '../../assets/projects/Screenshot2.png';
import project3 from '../../assets/projects/Screenshot3.png';
import project4 from '../../assets/projects/realestate.jpg';
import project5 from '../../assets/projects/workImg.jpeg';

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-300'>Projects</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>
                {/* container */}
                <div
                 className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid items */}
                    <div style={{backgroundImage: `url(${project1})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Summer School

                            </span>
                            <div className='pt-8 text-center'>
                                
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black  hover:bg-orange-400 hover:border-orange-400">
                                        <a href="https://summer-school-38aba.web.app/">
                                        View Demo
                                        </a>
                                        
                                    </button>
                               
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg  hover:bg-orange-400 hover:border-orange-400">
                                        <a href="https://github.com/sabzi3212/Summer-School.git">
                                        View Code
                                        </a>
                                        
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${project2})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Toy Store

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black  hover:bg-orange-400 hover:border-orange-400">
                                    <a href="https://toy-store-4dda1.web.app/">
                                        View Demo
                                        </a>
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg  hover:bg-orange-400 hover:border-orange-400">
                                    <a href="https://github.com/sabzi3212/toy-store.git">
                                        View Code
                                        </a>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${project3})`}}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Recipe  Book

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black  hover:bg-orange-400 hover:border-orange-400">
                                    <a href="https://chef-recipes-ee09f.web.app/">
                                        View Demo
                                        </a>
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg  hover:bg-orange-400 hover:border-orange-400">
                                    <a href="https://github.com/sabzi3212/recipe-hunter.git">
                                        View Code
                                        </a>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Projects;