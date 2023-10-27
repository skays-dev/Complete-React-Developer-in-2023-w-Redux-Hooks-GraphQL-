//react-redux
import { useDispatch, useSelector } from "react-redux";

//redux store component
import { selectIsCartOpen, selectCartCount  } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

//style
import { CartIconContainer, ItemCount, ShoppingIcon } from './card-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);


    const toggleIsCardOpen = () => dispatch(setIsCartOpen(!isCartOpen));


    return (
        <CartIconContainer onClick={toggleIsCardOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
        
    );
}

export default CartIcon;