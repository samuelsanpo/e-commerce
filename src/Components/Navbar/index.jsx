import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { ShoppingCarContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCarContext);
    const activeStyle = 'underline underline-offset-4';

    const handleOnClick = (category) => {
        context.setCategory(category);
        context.setSearch('');
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => handleOnClick()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => handleOnClick('clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => handleOnClick('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => handleOnClick('furnitures')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => handleOnClick('toys')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => handleOnClick('others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    samuelsanpo
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        onClick={() => handleOnClick()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        onClick={() => handleOnClick()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        onClick={() => handleOnClick()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex">
                    <ShoppingCartIcon className='h-5 w-5' />
                    {context.cartProducts.length}
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;