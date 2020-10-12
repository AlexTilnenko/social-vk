import React from "react";

import avatar from "../../../../assets/img/avatar.jpg";
import sprite from "../../../../assets/img/sprite.svg";
function Post() {
	return (
		<div className='post'>
			<div className='post__author'>
				<img src={avatar} alt='Alex' />
			</div>
			<div className='post__body'>Some post</div>
			
			<button className='btn btn--remove-post'>
            <svg>
               <use href={sprite + "#trash"}/>
            </svg>
         </button>
		</div>
	);
}

export default Post;
