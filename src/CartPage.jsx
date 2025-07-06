import { X } from "lucide-react";

const CartPage = ({ removeFromCart, cart = [], wishlist = [] }) => {

    console.log(cart);
    return (
        <div className="">
            {cart.length === 0 ? (
                <h2 className="text-center py-10 text-xl font-bold text-gray-600">
                    No Items found.
                </h2>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 max-w-xl mx-auto">
                    {cart.map((cart) => (
                        <div
                            key={cart.product_id}
                            className="bg-white rounded-xl border border-gray-300 shadow hover:shadow-lg transition duration-300 flex items-center justify-between p-4"
                        >
                            <img
                                src={cart.product_image}
                                alt={cart.product_title}
                                className="w-32 h-32 object-cover rounded-t-xl"
                            />
                            <div className="p-4 pe-0 ">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{cart.product_title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {cart.description}...
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-purple-600 font-bold">${cart.price}</span>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <button onClick={() => removeFromCart(cart)} title="Remove from cart" className="w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center">
                                    <X />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
