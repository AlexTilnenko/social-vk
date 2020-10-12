import React from "react";

import "./Profile.scss";
import avatar from "../../assets/img/avatar.jpg";
function Profile() {
	return (
		<div className='profile'>
			<div className='profile__header'>
				<div className='profile__photo'>
					<img src={avatar} alt='Alex' />
				</div>
				<div className='profile__info'>
					<ul className='profile__info-list'>
						<li className='profile__info-name'>Alex Tilnenko</li>
						<li className='profile__info-city'>
							<span>Город:</span>Kherson
						</li>
						<li className='profile__info-birth'>
							<span>День рождения:</span>24.08.1997
						</li>
						<li className='profile__info-education'>
							<span>Образование:</span>Kherson National Technical University
						</li>
						<li className='profile__info-social'>
							<span>Сайт:</span>https://vk.com
						</li>
					</ul>
				</div>
			</div>
			<div className='profile__posts'>
				<form className='profile__add-post'>
					<input className='profile__add-post-field' type='text' placeholder='Что у Вас нового?' />
					<button className='btn btn--add-post'>Добавить</button>
				</form>
			</div>
		</div>
	);
}

export default Profile;
