import { useContext } from "react";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCarContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCarContext);

    const showProduct = (productDetail) => {
        context.closeCheckoutSideMenu();
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.closeProductDetail();
        context.openCheckoutSideMenu();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.some(product => product.id === id);
        return (
            isInCart ?
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-white' />
                </div>
                :
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className='h-6 w-6 text-black' />
                </div>
        )
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5' >{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title}></img>
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>

    )
}

export default Card