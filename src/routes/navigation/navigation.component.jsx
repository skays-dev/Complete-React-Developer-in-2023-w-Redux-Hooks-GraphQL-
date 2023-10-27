import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';


import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector';


import { ReactComponent as CrownLogo } from '../../assets/crown.svg';


import { signOutStart } from '../../store/user/user.action';

//style
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';


const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);


    const signOutUser = () => dispatch(signOutStart());

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo  className='logo'  />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink to='/shop' >
                        Shop
                    </NavLink>

                    {currentUser ? 
                        <NavLink as='span' onClick={signOutUser}>
                            {' '}Sign out{' '}
                        </NavLink>
                        : 
                        <NavLink to='/auth' >
                            Sign In
                        </NavLink>
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CardDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;