// import React from 'react';
// import Home from './Home';
// import Statistic from './NotFound';
// import Dashboard from './Dashboard';
// import Contact from './Contact';
// import MainLayout from './MainLayout';
// import { Route, Routes } from 'react-router-dom';
// import NotFound from './NotFound';
// import ProductDetails from './ProductDetails';


// const App = () => {
//   return (
//     <div>

//       <Routes>
//         <Route path="/" element={<MainLayout></MainLayout>}>
//           <Route index element={<Home></Home>} />
//           {/* dashbord start  */}
//           <Route path="dashboard" element={<Dashboard></Dashboard>}>
//             <Route path='/dashboard/cart' element={<Dashboard></Dashboard>}></Route>
//             <Route path='/dashboard/wishlist' element={<Dashboard></Dashboard>}></Route>
//           </Route>
//           {/* contact start  */}
//           <Route path="Contact" element={<Contact></Contact>}>
//             <Route path='/contact/contact' element={<Contact></Contact>}></Route>
//             <Route path='/contact/feedback' element={<Contact></Contact>}></Route>
//           </Route>
//           {/* contact end  */}
//           <Route path="/product/:id" element={<ProductDetails></ProductDetails>} />




//         </Route>
//         <Route path="*" element={<NotFound></NotFound>} />
//       </Routes>


//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import Home from './Home';
// import Statistic from './Statistic';
// import Dashboard from './Dashboard';
// import Contact from './Contact';
// import MainLayout from './MainLayout';
// import { Route, Routes } from 'react-router-dom';
// import NotFound from './NotFound';
// import ProductDetails from './ProductDetails';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<Home />} />
//         <Route path="statistic" element={<Statistic />} />

//         {/* Dashboard Routes */}
//         <Route path="dashboard" element={<Dashboard />}>
//           <Route path="cart" element={<Dashboard />} />
//           <Route path="wishlist" element={<Dashboard />} />
//         </Route>

//         {/* Contact Routes */}
//         <Route path="contact" element={<Contact />}>
//           <Route path="contact" element={<Contact />} />
//           <Route path="feedback" element={<Contact />} />
//         </Route>

//         {/* Product Details */}
//         <Route path="product/:id" element={<ProductDetails />} />

//         {/* 404 Fallback */}
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;




import React, { useContext, useEffect } from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Contact from './Contact';
import MainLayout from './MainLayout';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import { Route, Routes } from 'react-router-dom';
import Feedback from './Feedback';
import ContactLayout from './ContactLayout';

// extra code start 
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Context } from './context/MainContext';
import { loadCartFromLS, saveIntoLS } from './storage';
// extra code end  

const App = () => {

  const { cart, setCart } = useContext(Context);


  const [products, setProducts] = useState([]);

  // const [cart, setCart] = useState([]);
  // const [wishlist, setWishlist] = useState([]);

  // const addToCart = (product) => {
  //   if (!cart.find(p => p.product_id === product.product_id)) {
  //     setCart([...cart, product]);
  //   }
  // };

  // const addToWishlist = (product) => {
  //   if (!wishlist.find(p => p.product_id === product.product_id)) {
  //     setWishlist([...wishlist, product]);
  //   }
  // };




  // extra code start 
  // const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const addToCart = (product) => {

    if (!cart.find(p => p.product_id === product.product_id)) {
      // load available items from local storage 
      const availableCart = loadCartFromLS();


      const newCartData = [...availableCart, product.product_id]
      setCart([...cart, product]);
      saveIntoLS(newCartData)
      toast.success("Successfully added into cart", {
        position: "top-center"
      });
    }

    else {
      toast.error("Product already added into cart", {
        position: "top-center"
      })
    }
  };

  useEffect(() => {
    fetch(`/data.json`)
      .then(res => res.json())
      .then(data => {

        setProducts(data)
      })

  }, []);

  useEffect(() => {
    const availableCart = loadCartFromLS();
    const data = products.filter(product => availableCart.includes(product.product_id))
    setCart(data)
  }, [products, setCart])

  const removeFromCart = (product) => {
    const cartItems = loadCartFromLS();

    const availableItems = cartItems.filter(item => item !== product.product_id);
    saveIntoLS(availableItems)

    const availableCart = cart.filter(item => item.product_id !== product.product_id);
    setCart(availableCart);
    toast.success("Succesfully removed from cart", {
      position: "top-center"
    });

  }

  const addToWishlist = (product) => {
    if (!wishlist.find(p => p.product_id === product.product_id)) {
      setWishlist([...wishlist, product]);
    }
  };
  // extra code end 
  return (
    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route index element={<Home />} />
    //     <Route path="dashboard" element={<Dashboard />}>
    //       <Route path="cart" element={<Dashboard />} />
    //       <Route path="wishlist" element={<Dashboard />} />
    //     </Route>
    //     <Route path='contact' element={<ContactLayout></ContactLayout>}>
    //       <Route path='contact' element={<Contact></Contact>}></Route>
    //       <Route path='feedback' element={<Feedback></Feedback>}></Route>
    //     </Route>
    //     <Route path="product/:id" element={<ProductDetails />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Route>
    // </Routes>


    <Routes>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard setCart={setCart} removeFromCart={removeFromCart} cart={cart} />}>
          <Route path="cart" element={<Dashboard setCart={setCart} removeFromCart={removeFromCart} cart={cart} />} />
          <Route path="wishlist" element={<Dashboard removeFromCart={removeFromCart} cart={cart} />} />
        </Route>
        <Route path="contact" element={<ContactLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* extra rout start */}
        <Route path="product/:id" element={
          <ProductDetails
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        } />
        {/* extra rout end  */}


        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};

export default App;
