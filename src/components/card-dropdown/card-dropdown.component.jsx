//react and react router
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//redux store component
import { selectCartItems } from '../../store/cart/cart.selector';

//components
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

//styles
import { CardDropdownContainer, CartItems, EmptyMessage } from './card-dropdown.styles';



//function or component
const CardDropdown = () => {
    const cartItems  = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => navigate('/checkout');


    return(
        <CardDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item}/>
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button style={{marginTop: 'auto',fontSize: '12px' }} buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
        </CardDropdownContainer>  
    );
}

export default CardDropdown;