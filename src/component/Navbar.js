import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.svg";
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const Navbar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
            <Link to="/">
                <img src={Logo} alt="telephone" className='navbar-brand' />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <Link to='/' className='nav-link'>
                        products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className='ms-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                        <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color:var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.nav-item {
    margin-left: 25px;
}
`

export default Navbar;
