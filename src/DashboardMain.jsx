import React, { useEffect, useState } from 'react';
import CartPage from './CartPage';
const DashboardMain = ({ cart, removeFromCart, setCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkoutPrice, setcheckoutPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const result = cart.reduce((previous, current) => {
            return Number(previous) + Number(current.price)
        }, 0);
        setTotalPrice(result);

    }, [cart]);

    const handlePurchase = () => {
        if (totalPrice > 0) {
            setcheckoutPrice(totalPrice)
            setIsModalOpen(true)
            setCart([]);
        }

    }
    const handleCloseModal = () => {
        setcheckoutPrice(0);
        setIsModalOpen(false)
    }
    return (
        <div className='mt-12 mb-4'>
            <div className='flex justify-between '>
                <div className='font-bold text-3xl'>
                    Cart
                </div>
                <div className='flex gap-4'>
                    <p className='font-bold text-3xl'>
                        Total Cost: ${totalPrice.toFixed(2)}
                    </p>
                    <button className='border border-2 font-bold border-purple-700 rounded-3xl px-6 py-2  cursor-pointer text-purple-500 '>
                        Sort by Price

                    </button>
                    <button onClick={() => handlePurchase()} className='border rounded-3xl px-6 py-2 cursor-pointer font-bold text-white bg-purple-700'>
                        Purchase
                    </button>
                </div>
            </div>
            <CartPage removeFromCart={removeFromCart} cart={cart}></CartPage>
            {
                isModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Payment Successfull</h2>
                        <p className="mb-4">Congratulations! Your order has been successfully purchased !</p>
                        <p>Total Price : {checkoutPrice}</p>
                        <div className="flex justify-end">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default DashboardMain;