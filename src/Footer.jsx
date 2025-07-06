
import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* structure footer added start  */}
      {/* first step start  */}
    <div>
        <h2 className='text-center font-bold text-3xl mb-2'>
        Gadget Heaven
      </h2>
      <p className='text-center mb-4'>
        Leading the way in cutting-edge technology and innovation.
      </p>
         <div className="mt-6 w-full h-[2px] bg-gray-300"></div>
    </div>
{/* first step end  */}
{/* second step start  */}
<div className='flex justify-between px-32 mt-10'>
    <div>
<h1 className='text-3xl font-bold mb-4'>
Service
</h1>
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Product Support</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Order Tracking</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Shipping & Delivery</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Returns</a>
  </div>
  <div>
<h1 className='text-3xl font-bold mb-4'>
Company
</h1>
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>About Us</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Careers</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Contact</a>
  </div>
  <div>
<h1 className='text-3xl font-bold mb-4'>
Legal
</h1>
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Terms of Service</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Privacy Policy</a>
<br />
<a href="" className='text-gray-500 mb-2 hover:text-blue-500'>Cookie Policy</a>
  </div>
</div>

{/* extra footer added start  */}
     <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500 mt-16">
       © 2025 GadgetHeaven. All rights reserved.
     </footer> 
     {/* extra footer added end  */}
    </div>
  );
};

export default Footer;