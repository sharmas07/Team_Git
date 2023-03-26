import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
			family name
		</NavLink>
        </NavMenu>
		<NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

