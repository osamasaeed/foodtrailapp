'use strict';

const calculateCart = (cart, taxPercent = 0, discountPercent = 0) => {
    let itemTotal = 0;
    let cartTotal = 0;
    let tax = 0;
    let discount = 0;

    cart.items.map(i => itemTotal += (parseFloat(i.price) * i.qty));
    discount = (itemTotal / 100) * discountPercent;

    // added tax on discounted value
    tax = ((itemTotal - discount) / 100) * taxPercent;

    cartTotal = ((itemTotal - discount + tax));

    cart.discountPercent = discountPercent;
    cart.taxPercent = taxPercent;
    cart.discount = discount;
    cart.tax = tax;
    cart.total = itemTotal;
    cart.netTotal = cartTotal;

    return cart;
}

export const logics = {
    calculateCart: calculateCart,
    addToCart: (cart, items, index) => {
        const item = { qty: 1, ...items[index] }
        const cartIndex = cart.items.findIndex(i => i.id === item.id);
        if (cartIndex !== -1) {
            cart.items[cartIndex].qty += 1;
        } else {
            cart.items.push(item);
        }
        cart = calculateCart(cart);
        return cart;
    },
    onMinusQty: (cart, items, index) => {
        const item = items[index];
        const cartIndex = cart.items.findIndex(i => i.id === item.id);
        if (cartIndex > -1) {
            if (cart.items[cartIndex].qty > 1) {
                cart.items[cartIndex].qty -= 1;
            } else {
                cart.items.splice(cartIndex, 1);
            }
        }
        cart = calculateCart(cart);
        return cart;
    },
    onRemoveItem: (cart, index) => {
        if (index > -1) {
            cart.items.splice(index, 1);
        }
        cart = calculateCart(cart);
        return cart;
    },
    isAddedInCart: (cart, items, index) => {
        const item = items[index];
        const cartItem = cart.items.filter(i => i.id === item.id)[0]
        if (cartItem) {
            return cartItem.qty;
        } else {
            return 0
        }
    }
}