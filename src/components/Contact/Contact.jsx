import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form action="https://getform.io/f/5ebacd35-92d0-4eb2-8a29-1bd102d04b8f" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-400 text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-4'>Shoot me an email at contactSabbir.lus@gmail.com</p>

                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input type="email" placeholder='email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
                <button className='text-white border-2 hover:bg-orange-400 hover:border-orange-400 px-4 py-3 my-8 mx-auto flex items-center'>Lets Connect</button>

            </form>
            
        </div>
    );
};

export default Contact;