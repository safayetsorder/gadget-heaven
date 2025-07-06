import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center mt-4'>
                Feedback
            </h1>
            <div className='mx-auto w-[50%] mt-8 mb-12'>
                <div className='border p-16 rounded-2xl shadow-lg '>
                    <p className='font-bold'>

                        Username

                    </p>
                    <input className='w-full mt-4 mb-2 border px-3  rounded-lg py-2' type="text" placeholder='Username' />
                    <p className='font-bold'>

                        Email


                    </p>
                    <input className='w-full mt-4 mb-2 border px-3  rounded-lg py-2' type="text" placeholder='Email' />
                    <p className='font-bold'>

                        Feedback

                    </p>
                    <input className='w-full mt-4 mb-2 border px-3  rounded-lg py-4' type="text" placeholder='' />

                    <button className='bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 mt-4'>
                        Submit

                    </button>
                </div>

            </div>
        </div>
    );
};

export default Feedback;