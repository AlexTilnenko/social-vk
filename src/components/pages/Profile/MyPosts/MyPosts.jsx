import React from 'react'
import Post from '../Post/Post';

function MyPosts() {
   return (
		<div className='my-posts'>
			<form className='add-post'>
				<input className='add-post-field' type='text' placeholder='Что у Вас нового?' />
				<button className='btn btn--add-post'>Добавить</button>
			</form>
         <Post/>
		</div>
	);
}

export default MyPosts
