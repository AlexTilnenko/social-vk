import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from '../../redux/actions/users';

import photoHolder from '../../assets/img/user.png'

function Users() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
   }, []); // eslint-disable-line react-hooks/exhaustive-deps
   
   const users = useSelector(state => state.users.items);
	return (
		<div className='users'>
			<ul className='users__list'>
         {users.map(({id, name, followed}) => {
            return (
					<li className='users__item block' key={id}>
						<span className='users__item-photo avatar'>
							<img src={photoHolder} alt={name} />
						</span>
						<span className='users__item-name'>{name}</span>
						<span className='btn btn--follow'>{followed ? "Unfollow" : "Follow"}</span>
					</li>
				);
         })}
			</ul>
		</div>
	);
}

export default Users;
