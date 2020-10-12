import React from "react";

import sprite from '../assets/img/sprite.svg';

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<a href='/' className='header__logo'>
					<svg>
						<use href={sprite + "#logo"}></use>
					</svg>
				</a>
			</div>
		</header>
	);
}

export default Header;
