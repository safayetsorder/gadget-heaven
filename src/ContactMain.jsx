import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";

const ContactMain = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>
                Contact
            </h1>
            <div>
                <div className="flex pl-6 pr-6 justify-between mt-8 mb-20">
                    <div className='rounded-[32px] hover:bg-gray-200 flex items-center border px-3 py-1/2 rounded-xl border-black'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" p-3 rounded-full">
                            <FaFacebookF className="text-blue-600   bg-blue-200 p-1 text-3xl rounded" /></a>
                        <p className='font-bold text-2xl'>Facebook</p>
                    </div>
                    <div className='rounded-[32px] hover:bg-gray-200 flex items-center border px-3 py-1/2 rounded-xl border-black'>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" p-3 rounded-full">
                            <FaInstagram className="text-pink-600 bg-pink-200 p-1 text-3xl rounded" /></a>
                        <p className='font-bold text-2xl'>Instragram</p>
                    </div>
                    <div className='rounded-[32px] hover:bg-gray-200 flex items-center border px-3 py-1/2 rounded-xl border-black'>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" p-3  rounded-full">
                            <FaLinkedinIn className="text-blue-700  bg-blue-200 p-1 text-3xl rounded" /></a>
                        <p className='font-bold text-2xl'>LinkedIn</p>
                    </div>
                    <div className='rounded-[32px] hover:bg-gray-200 flex items-center border px-3 py-1/2 rounded-xl border-black'>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className=" p-3 rounded-full">
                            <FaDiscord className="text-indigo-600 bg-indigo-200 p-1 text-3xl rounded" /></a>
                        <p className='font-bold text-2xl'>Discord</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ContactMain;