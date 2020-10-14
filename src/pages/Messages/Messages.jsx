import React from "react";

import avatar from "../../assets/img/avatar.jpg";
function Messages() {
	return (
		<div className='messages'>
			<div className='messages__list block'>
				<div className='messages__list-item'>
					<div className='avatar'>
						<img src={avatar} alt='User' />
					</div>
					<span>Sasha</span>
				</div>
				<div className='messages__list-item'>
					<div className='avatar'>
						<img src={avatar} alt='User' />
					</div>
					<span>Sasha</span>
				</div>
				<div className='messages__list-item'>
					<div className='avatar'>
						<img src={avatar} alt='User' />
					</div>
					<span>Sasha</span>
				</div>
				<div className='messages__list-item'>
					<div className='avatar'>
						<img src={avatar} alt='User' />
					</div>
					<span>Sasha</span>
				</div>
			</div>
			<div className='messages__dialog block'>
				<div className='messages__dialog-body'>
					<span>Lorem ipsum dolor sit amet.</span>
					<span>Lorem ipsum </span>
					<span>dolor sit amet.</span>
					<span>Lorem sit amet.</span>
					<span>Lo.</span>
					<span>Losit amet.</span>
				</div>
				<div className='messages__dialog-form'>
					<form className='add-form'>
						<input
							className='add-form-field'
							type='text'
							placeholder='Напишите текст сообщения...'
						/>
						<button className='btn btn--add-form'>Отправить</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Messages;
