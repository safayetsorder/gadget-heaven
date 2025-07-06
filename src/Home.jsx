import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            })

    }, []);
    useEffect(() => {
        const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
        setCategories(uniqueCategories)
    }, [products]);

    const handleFilter = (category) => {
        const filteredProducts = products.filter(product => product.category === category);
        setFilteredProducts(filteredProducts)
    }

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])
    return (
        <div className='mb-16'>
            <div className='bg-blue-600 py-20 '>
                <h1 className='font-bold mb-4 text-white text-3xl text-center'>
                    Upgrade Your Tech Accessorize <br /> with Gadget Heaven Accessories

                </h1>
                <p className='mx-auto text-white text-center mb-8'>
                    Explore the latest gadgets that will take your experience to the next level. From <br /> smart devices to the coolest accessories, we have it all!


                </p>
                <p className=' text-center'>
                    <NavLink className='bg-white text-blue-600 px-6 py-2 mt-4 rounded-xl font-bold hover:bg-gray-200'
                        to="/dashboard/cart">
                        Shop Now
                    </NavLink>
                </p>


            </div>
            <h1 className='font-bold text-center text-4xl mt-12 mb-12'>
                Explore Cutting-Edge Gadgets
            </h1>
            <div className='w-full flex gap-2 mt-8'>
                {/* first step  */}
                <div className='w-[25%] h-[50%]  p-4 rounded-md grid grid-cols-1 border p-4 rounded shadow'>
                    <button onClick={() => setFilteredProducts(products)} className='border rounded-lg cursor-pointer px-6 py-2 text-md mb-4 bg-gray-200 hover:text-white hover:bg-blue-500'>
                        All Product
                    </button>

                    {
                        categories?.map((category, index) => {
                            return (
                                <button key={index} onClick={() => handleFilter(category)} className='border rounded-lg cursor-pointer px-6 py-2 text-md mb-4 bg-gray-200 hover:text-white hover:bg-blue-500'>
                                    {category}
                                </button>
                            )
                        })
                    }


                </div>
                {/* second step  */}
                <div className='w-[75%] h-fit rounded-lg grid  grid-cols-3 gap-2'>
                    {filteredProducts.map(product => {
                        return (
                            <div key={product.product_id} className="border p-4 rounded shadow flex flex-col gap-2">
                                <img className='w-full h-[170px] object-cover rounded' src={product.product_image} alt="" />
                                <p className="font-bold text-xl">{product.product_title}</p>
                                <p className='text-gray-400'>Price: ${product.price}</p>
                                <Link to={`/product/${product.product_id}`} className='px-6 py-2 rounded-xl border-2 border-blue-500 text-lg cursor-pointer text-blue-500 hover:text-white hover:bg-blue-500 mt-auto'>
                                    View Details
                                </Link>
                            </div>

                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Home;