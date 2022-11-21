import Link from "next/link";
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

const Navbar: React.FC = () => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state; 
  return (
    <>
        <nav className="flex h-12 px-4  shadow-md  items-center justify-between">
            <Link className="text-lg font-bold" href="/">Next Store</Link>
            <div>
                <Link className="px-2" href='/cart'>
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0 )}
                    </span>
                  )}
                  </Link>
                <Link href='/login'>Login</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar;