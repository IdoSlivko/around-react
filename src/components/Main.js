import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CurrentCardContext } from '../contexts/CurrentCardContext.js';

import Card from './Card.js';

export default function Main(props) {

	const currentUser = React.useContext(CurrentUserContext);
	const cards = React.useContext(CurrentCardContext);

	function handleCardLike(card) {
		props.onCardLike(card);
	}

	function handleCardDelete(card) {
		props.onCardDelete(card);
	}

	return (
		<main className="content">

			<section className="profile">
				<div className="profile__info">
					<button className="profile__edit-image" title="Edit profile image" onClick={props.onEditAvatarClick} />
					<div className="profile__image-container">
						<img className="profile__image" alt="User profile pic" src={currentUser.avatar} />
					</div>
					<div className="profile__main-text">
						<div className="profile__text">
							<h1 className="profile__name">{currentUser.name}</h1>
							<button className="profile__edit-profile" title="Edit profile" aria-label="edit profile" onClick={props.onEditProfileClick} />
						</div>
						<p className="profile__occupation">{currentUser.about}</p>
					</div>
				</div>
				<button className="profile__add-photo" title="Add photo" aria-label="add photo" onClick={props.onAddPlaceClick} />
			</section>

			<section className="elements">
				{cards.map((card) => {
						return (
							<Card
								data={card}
								key={card._id}
								onCardClick={props.onCardClick}
								onCardLike={handleCardLike}
								onCardDelete={handleCardDelete}
							/>
					);})}
			</section>

		</main>
	);
}