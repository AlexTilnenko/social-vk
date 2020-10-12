import React from "react";
import { Link } from "react-router-dom";

import sprite from "../../assets/img/sprite.svg";

function Navbar() {
	return (

			<nav className='navbar'>
				<ul className='navbar__list'>
					<li className='navbar__list-item'>
						<Link to='/profile' className='navbar__list-link'>
							<svg className='navbar__list-ico'>
								<use href={sprite + "#home"} />
							</svg>
							<span>Моя страница</span>
						</Link>
					</li>
					<li className='navbar__list-item'>
						<Link to='/messages' className='navbar__list-link'>
							<svg className='navbar__list-ico'>
								<use href={sprite + "#messages"} />
							</svg>
							<span>Сообщения</span>
						</Link>
					</li>
					<li className='navbar__list-item'>
						<a href='/' className='navbar__list-link'>
							<svg className='navbar__list-ico'>
								<use href={sprite + "#news"} />
							</svg>
							<span>Новости</span>
						</a>
					</li>
					<li className='navbar__list-item'>
						<a href='/' className='navbar__list-link'>
							<svg className='navbar__list-ico'>
								<use href={sprite + "#music"} />
							</svg>
							<span>Музыка</span>
						</a>
					</li>
					<li className='navbar__list-item'>
						<a href='/' className='navbar__list-link'>
							<svg className='navbar__list-ico'>
								<use href={sprite + "#settings"} />
							</svg>
							<span>Настройки</span>
						</a>
					</li>
				</ul>
			</nav>
	);
}

export default Navbar;
