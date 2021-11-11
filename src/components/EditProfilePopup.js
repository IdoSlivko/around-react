import React from 'react';

import PopupWithForm from './PopupWithForm.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditProfilePopup(props) {
	
	const currentUser = React.useContext(CurrentUserContext);
	
	const [ name, setName ] = React.useState('');
	const [ description, setDescription ] = React.useState('');

	React.useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	function handleNameChange(evt) {
		setName(evt.target.value);
	}

	function handleDescriptionChange(evt) {
		setDescription(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onUpdateUser({
			name: name,
			about: description
		});
	}

	return (
		<PopupWithForm
			name="profile"
			title="Edit profile"
			isOpen={props.isOpen}
			onClose={props.onClose}
			submitText="Save"
			onSubmit={handleSubmit}
			>
			<input
				id="fullName-input"
				className="popup__input popup__input_content_full-name"
				type="text"
				name="fullName"
				placeholder="Full name"
				minLength="2"
				maxLength="40"
				value={name || ''}
				onChange={handleNameChange}
				required
				/>
			<span
				id="fullName-input-error"
				className="popup__input-error-msg"
			/>
			<input
				id="about-input"
				className="popup__input popup__input_content_about"
				type="text"
				name="about"
				placeholder="About"
				minLength="2"
				maxLength="200"
				value={description || ''}
				onChange={handleDescriptionChange}
				required
			/>
			<span
				id="about-input-error"
				className="popup__input-error-msg"
			/>
		</PopupWithForm>
	)
}