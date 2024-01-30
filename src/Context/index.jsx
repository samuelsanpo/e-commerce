import { createContext, useState, useEffect } from "react";

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
    //Shopping cart Order
    const [order, setOrder] = useState([]);

    //Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);


    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');


    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);

    const filteredItemsByTitle = (items, search) => {
      return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredItemsByCategory = (items, category) => {
      return items?.filter(item => item.category.name.toLowerCase().includes(category.toLowerCase()));
    }

    const filterBy = (searchType, items, search, category) => {
      if (searchType === 'BY_TITLE') {
        return filteredItemsByTitle(items, search)
      }
  
      if (searchType === 'BY_CATEGORY') {
        return filteredItemsByCategory(items, category)
      }
  
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filteredItemsByCategory(items, category).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      }
  
      if (!searchType) {
        return items
      }
    }

    useEffect(() => {
      if (search && category) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, category))
      if (search && !category) setFilteredItems(filterBy('BY_TITLE', items, search, category))
      if (!search && category) setFilteredItems(filterBy('BY_CATEGORY', items, search, category))
      if (!search && !category) setFilteredItems(filterBy(null, items, search, category))
      }, [items, search, category]);

  
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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            search,
            setSearch,
            filteredItems,
            setCategory,
            category
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}