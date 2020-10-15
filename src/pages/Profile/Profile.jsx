import React from "react";
import MyPosts from "../../components/MyPosts/MyPosts";
import { useSelector } from "react-redux";

function Profile() {
	const { name, city, birth, education, socialUrl, avatarImg } = useSelector(
		(state) => state.profile
	);
	const posts = useSelector((state) => state.posts.activePosts);
	return (
		<div className='profile'>
			<div className='profile__header'>
				<div className='block profile__info'>
					<ul className='profile__info-list'>
						<li className='profile__info-name'>{name}</li>
						<li className='profile__info-city'>
							<span>Город:</span>
							{city}
						</li>
						<li className='profile__info-birth'>
							<span>День рождения:</span>
							{birth}
						</li>
						<li className='profile__info-education'>
							<span>Образование:</span>
							{education}
						</li>
						<li className='profile__info-social'>
							<span>Сайт:</span>
							<a href={`https://${socialUrl}`} rel='noopener noreferrer' target='_blank'>
								{socialUrl}
							</a>
						</li>
					</ul>
				</div>
				<div className='block profile__photo'>
					<img src={avatarImg} alt={name} />
				</div>
			</div>

			<MyPosts posts={posts} avatar={avatarImg} />
		</div>
	);
}

export default Profile;
