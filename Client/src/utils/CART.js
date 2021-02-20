

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

function onRemove(product, cartItems, setCartItems) {
    const exists = cartItems.find((x) => x.id === product.id)
    if (exists.qty === 1){
        setCartItems(cartItems.fitler((x) => x.id !==product.id));
    }else{
        setCartItems(cartItems.map( (x) => 
            x.id === product.id ? {...exists, qty: exists.qty -1} : x
            )
        );
    }
}
    

export const cart = { onAdd, onRemove }
