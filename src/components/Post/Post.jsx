import React from "react";

import sprite from "../../assets/img/sprite.svg";

function Post({ post, avatar, onDeletePost, onLikePost }) {
	const { id, text, img, likeCount, liked } = post;
	return (
		<div className='block post'>
			<div className='post__author avatar'>
				<img src={avatar} alt='Alex' />
			</div>
			<div className='post__body'>
				<div className='post__text'>{text}</div>
				{post.img && (
					<div className='post__img'>
						<img src={img} alt={text} />
					</div>
				)}
			</div>
			<button className='btn btn--like' onClick={() => onLikePost(id)}>
				<span>{likeCount}&nbsp;</span>
				<svg className={liked ? 'liked' : ''}>
					<use href={sprite + "#like"} />
				</svg>
			</button>

			<button className='btn btn--remove-post' onClick={() => onDeletePost(id)}>
				<svg>
					<use href={sprite + "#trash"} />
				</svg>
			</button>
		</div>
	);
}

export default Post;
