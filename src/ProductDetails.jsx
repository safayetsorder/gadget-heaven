import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const ProductDetails = ({ addToCart, addToWishlist }) => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    // extra code start 
    const navigate = useNavigate();
    //  extra code end 
    const pathname = location.pathname;
    const productId = pathname.split("/")[2];

    useEffect(() => {
        fetch(`/data.json`).then(res => res.json()).then(data => setProducts(data))
    }, []);


    useEffect(() => {
        const selectedProduct = products.find(product => product.product_id === productId);
        setProduct(selectedProduct);
    }, [products, productId]);


    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    if (!product) {
        return <p className="text-center mt-10 text-xl font-bold">Loading product details...</p>;
    }



    // step for assist 

    // const ProductDetails = ({ addToCart, addToWishlist }) => {
    //     const { id } = useParams();
    //     const [product, setProduct] = useState({});
    //     const navigate = useNavigate();

    //     useEffect(() => {
    //         fetch('/data.json')
    //             .then(res => res.json())
    //             .then(data => {
    //                 const found = data.find(p => p.product_id === id);
    //                 setProduct(found);
    //             });
    //     }, [id]);

    // step for assist 



    return (
        <div>
            <div className="relative ">
                <div className='bg-purple-600 pt-12 pb-60 '>
                    <h1 className='font-bold text-white text-3xl text-center mb-7'>
                        Product Details

                    </h1>
                    <p className='mx-auto text-white text-center'>
                        Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest <br /> accessories, we have it all!
                    </p>
                </div>



                <div className='w-[80%] bg-gray-100 flex border-4 mb-12 mx-auto p-12 rounded-2xl gap-4 absolute top-[50%] -translate-x-1/2 left-1/2 '>
                    <div className='w-[35%]'>
                        <img className='h-[190px]' src={product.product_image} alt="" />
                    </div>
                    <div className='w-[65%] mx-auto'>
                        <h1 className='font-bold text-3xl'>
                            {product.product_title}
                        </h1>
                        <p className='font-bold mt-3 mb-2'>Price:${product.price}</p>
                        <button className='px-4 py-1 bg-blue-300 text-yellow-500 rounded-xl font-bold mt-3 mb-3'>
                            In Stock
                        </button>
                        <p>
                            {product.description}
                        </p>
                        {/* <div className='mb-2'>
                        <p className='font-bold text-xl mt-3 mb-2'>Specification</p>
                        <p className='text-gray-400'>1.{product?.specification?.[0]}</p>
                        <p className='text-gray-400'>2.{product?.specification?.[1]}</p>
                        <p className='text-gray-400'>3.{product?.specification?.[2]}</p>
                        <p className='text-gray-400'>4.{product?.specification?.[3]}</p>
                        <p className='text-gray-400'>5.{product?.specification?.[4]}</p>
                    </div> */}

                        <div className='mb-2'>
                            <p className='font-bold text-xl mt-3 mb-2'>Specification</p>
                            {product.specification?.length > 0 ? (
                                product.specification.map((item, index) => (
                                    <p key={index} className='text-gray-400'>{index + 1}. {item}</p>
                                ))
                            ) : (
                                <p className='text-gray-500'>No specifications available.</p>
                            )}
                        </div>
                        <p className='font-bold text-xl mb-2'>
                            Rating
                        </p>
                        <div className='flex '>
                            {
                                [1, 2, 3, 4, 5].map(() => <i className='fas fa-star text-orange-600'></i>)
                            }
                        </div>

                        {/* <div>
                                <h2>{product.product_title}</h2>
                                <p>Price: ${product.price}</p>
                            </div> */}

                        <div className='flex gap-4 mt-3'>
                            <button onClick={() => {
                                addToCart(product);
                                // navigate('/dashboard/cart');
                            }} className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-bold'>
                                Add To Cart
                            </button>
                            <button onClick={() => {
                                addToWishlist(product);
                                navigate('/dashboard/wishlist');
                            }} className='bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl font-bold'>
                                Add To Wishlist
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='h-[70vh]'>

            </div>
        </div>






    );
};

export default ProductDetails;