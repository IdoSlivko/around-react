import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Card(props) {

	const currentUser = React.useContext(CurrentUserContext);
	const isOwn = props.data.owner._id === currentUser._id;
	const isLiked = props.data.likes.some(i => i._id === currentUser._id);
	
	const cardDeleteButtonClassName = (
  	`elements__delete-button ${isOwn ? 'elements__delete-button_active' : ''}`
	);
	const cardLikeButtonClassName = (
		`elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`
	);
	
	function handleClick() {
		props.onCardClick(props.data);
	}

	function handleDeleteClick() {
		props.onCardDelete(props.data);
	}

	function handleLikeClick() {
		props.onCardLike(props.data);
	}

	return (
		<article className="elements__item">
			<button className={cardDeleteButtonClassName} type="button" title="Delete image" aria-label="delete image" onClick={handleDeleteClick} />
			<img className="elements__image" src={props.data.link} alt={props.data.name} onClick={handleClick} />
			<div className="elements__description">
				<h3 className="elements__title">{props.data.name}</h3>
				<div className="elements__like-section">
					<button className={cardLikeButtonClassName} type="button" aria-label="like button" onClick={handleLikeClick} />
					<div className="elements__like-counter">{props.data.likes.length}</div>
				</div>
			</div>
		</article>
	);
}