import { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaMailBulk, FaPaperPlane, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Sabbir Ahmed.png';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between px-4 bg-[#0a192f] text-green-300'>
            <div>
                <img src={logo} alt="logo" style={{ width: '80px' }} />

            </div>
            {/* Menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>
            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>

            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href='https://www.linkedin.com/in/sabbir-ahmed-1ba70b1a7/' className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30}></FaLinkedin>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a href='https://github.com/sabzi3212' className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30}></FaGithub>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
                        <a href='Sabbirahmed760681@gmail.com' className='flex justify-between items-center w-full text-gray-300'>
                            Email <FaMailBulk size={30}></FaMailBulk>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a href='https://docs.google.com/document/d/1-U416EVfHYXspL8-yjHHfo1mFj_BqvAkppy9DIfODbE/edit?usp=sharing' className='flex justify-between items-center w-full text-gray-300'>
                            Resume <FaPaperPlane size={30}></FaPaperPlane>
                        </a>
                    </li>
                </ul>


            </div>


        </div>
    );
};

export default Navbar;