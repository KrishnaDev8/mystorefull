'use client';
import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import CartItem from '../../Components/cartItem';
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', pincode: '' });
  const {
    cartState: { cart },
    cartDispatch,
  } = useCartContext();

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);
    setTotal(totalPrice);
  }, [cart]);

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.pincode) {
      alert('Please fill the details');
      return;
    }

    alert('Order Placed');
    cartDispatch({
      type: 'REMOVE-ALL-ITEMS',
    });
    router.push('/');
  }

  function handleRemoveItem(product) {
    cartDispatch({
      type: 'REMOVE-FROM-CART',
      payload: product,
    });
  }

  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mt-10 gap-6 min-h-screen">
      <div className="pt-8">
        <h2 className="text-xl font-medium">In your cart</h2>
        
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {cart.length
            ? cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  callback={() => handleRemoveItem(item)}
                />
              ))
            : 'No Items Added'}
        </div>
        <div className="flex gap-4 mt-6 ml-40">
          <p className='text-xl font-medium'>Total price : </p>
          <p className='text-xl font-medium'>&#8377;{total}</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        {/* <div className="flex gap-4">
          <h6>Total price : </h6>
          <p className="text-heading-1/h1">&#8377;{total}</p>
        </div> */}
        <div className="flex gap-4">
          <p className="text-heading-3/h1">Secure Checkout</p>
        </div>
        <form
          className="pt-8 flex flex-col gap-6 justify-center items-center border-2 rounded-md p-4 "
          onSubmit={handlePlaceOrder}
          onChange={handleForm}
        >
          <div className="flex gap-4 items-center w-full  justify-between">
            <label className="text-xl font-medium">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="py-2 px-4 outline-none text-body-1/b3 placeholder:text-grey-2 rounded-sm w-full"
            />
          </div>
          <div className="flex gap-4 items-center w-full justify-between">
            <label className="text-xl font-medium">Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="py-2 px-4 outline-none text-body-1/b3 placeholder:text-grey-2 rounded-sm w-full"
            />
          </div>
          <div className="flex gap-4 items-center w-full  justify-between">
            <label className="text-xl font-medium">Pincode: </label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter your pincode"
              className="py-2 px-4 outline-none text-body-1/b3 placeholder:text-grey-2 rounded-sm w-full"
            />
          </div>
          <div class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <button className="flex gap-4 items-center" type="submit">
              PAY NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
