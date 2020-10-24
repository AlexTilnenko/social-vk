import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setCurrentPage, setLoading } from "../../redux/actions/users";
import { fetchUserProfile } from "../../redux/actions/profile";
import classNames from "classnames";
import Loader from "../../components/Loader/Loader";

import photoHolder from "../../assets/img/user.png";
import { Link } from "react-router-dom";

function Users() {
	const dispatch = useDispatch();
	const { items, pageSize, totalUsersCount, currentPage, loading } = useSelector(
		(state) => state.users
	);

	useEffect(() => {
		dispatch(setLoading());
		dispatch(fetchUsers(currentPage, pageSize));
	}, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	const pages = [];
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	const onPageChange = (page) => {
		dispatch(setLoading());
		dispatch(setCurrentPage(page));
	};
 
	return (
		<div className='users'>
			{loading && <Loader />}
			<ul className='users__pages-list'>
				{pages.map((page) => (
					<li
						key={page}
						className={classNames("users__page", "block", {
							active: currentPage === page
						})}
						onClick={() => onPageChange(page)}
					>
						{page}
					</li>
				))}
			</ul>
			<ul className='users__list'>
				{items.map(({ id, name, followed, photos }) => {
					return (
						<li className='users__item block' key={id}>
							<Link to={`/profile/${id}`}>
								<span className='users__item-photo avatar'>
									<img src={photos.large || photoHolder} alt={name} />
								</span>
								<span className='users__item-name'>{name}</span>
							</Link>
							<span className='btn btn--follow'>{followed ? "Unfollow" : "Follow"}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Users;
