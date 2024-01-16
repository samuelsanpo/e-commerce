import { createContext, useState } from "react";

export const ShoppingCarContext = createContext();

export const ShoppingCarProvider = ({ children }) => {
    //Shopping cart
    const [count, setCount] = useState(0);

    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    
    //Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Product Detail Product
    const [productToShow, setProductToShow] = useState({});
    //Shopping cart Add products to cart
    const [cartProducts, setCartProducts] = useState([]);


  
    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}