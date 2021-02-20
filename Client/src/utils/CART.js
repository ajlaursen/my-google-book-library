

    function onAdd (product, cartItems, setCartItems)  {
        const exists = cartItems.find(x => x.id === product.id);
        if (exists){
            setCartItems(cartItems.map( (x) => 
                x.id === product.id ? {...exists, qty: exists.qty +1} : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }


export const cart = { onAdd }

