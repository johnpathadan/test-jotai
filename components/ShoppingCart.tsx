import React from 'react'
import { useAtom } from 'jotai';
import { cartAtom, totalAtom } from '@/app/shopping-cart-atoms';


const ShoppingCart = () => {
    const [cart, setCart] = useAtom(cartAtom);
    const [total] = useAtom(totalAtom);

    const addItem = (item: any)=>{
        setCart((prevCart) => [...prevCart, item])
    }
    const removeItem = (index) => {
        setCart((prevCart) => prevCart.filter((_, idx) => idx !== index));
    }
  return (
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            {cart?.map((item, index)=>{
                return(
                    <li key={index}>
                        {item.itemName} - {item.price}
                        <button onClick={()=> removeItem(index)}>Remove Item</button>
                    </li>
                );
            })}
        </ul>
        <h2>Total: {total}</h2>
        <button onClick={()=> addItem({itemName: "Apple", price: 0.99})}>Add Apple</button>
        <button onClick={()=> addItem({itemName: "Banana", price: 2.99}) }>Add Banana</button>
    </div>
  )
}

export default ShoppingCart