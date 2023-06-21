import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import  js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import firebase from '../../assets/firebase.png';
import node from '../../assets/node.png';
import mongo from '../../assets/mongo.png';
import github from '../../assets/github.png';
import tailwind from '../../assets/tailwind.png';



const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl inline font-bold border-b-4 border-orange-400'>Skills</p>
                    <p className='py-4'>These are the technology I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'> 
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt="HTML" />
                        <p className='my-4'>Html</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="CSS" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={js} alt="js" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="react" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={node} alt="Node" />
                        <p className='my-4'>Node js</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongo} alt="mongodb" />
                        <p className='my-4'>Mongodb</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={firebase} alt="Firebase" />
                        <p className='my-4'>Firbase</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="github" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shodow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="tailwind" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;