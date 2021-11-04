import React from 'react';
import {api} from '../utils/api.js';
import Card from './Card.js';


export default function Main(props) {

	const [userAvatar, setUserAvatar] = React.useState('');
	const [userName, setUserName] = React.useState('User name');
	const [userDescription, setUserDescription] = React.useState('About');
	const [cards, setCards] = React.useState([]);
	

	React.useEffect(() => {
		api.getProfileInfo()
		.then((res) => {
			setUserAvatar(res.avatar);
			setUserName(res.name);
			setUserDescription(res.about);
		})
		.catch((error) => console.log("Error from getProfileInfo:", error));
	}, []);
	
	React.useEffect(() => {
		api.getServerImages()
		.then((res) => {
			setCards(res);
		})
		.catch((error) => console.log("Error from getServerImages:", error));
	}, []);

	
	return (
		<main className="content">

			<section className="profile">
				<div className="profile__info">
					<button className="profile__edit-image" title="Edit profile image" onClick={props.onEditAvatarClick} />
					<div className="profile__image-container">
						<img className="profile__image" alt="User profile pic" src={userAvatar} />
					</div>
					<div className="profile__main-text">
						<div className="profile__text">
							<h1 className="profile__name">{userName}</h1>
							<button className="profile__edit-profile" title="Edit profile" aria-label="edit profile" onClick={props.onEditProfileClick} />
						</div>
						<p className="profile__occupation">{userDescription}</p>
					</div>
				</div>
				<button className="profile__add-photo" title="Add photo" aria-label="add photo" onClick={props.onAddPlaceClick} />
			</section>

			<section className="elements">
				{
					cards.map((card) => {
						return (
							<Card data={card} key={card._id} onCardClick={props.onCardClick} onDeleteClick={props.onDeleteClick} />
					);})
				}
			</section>

	</main>
	);
}