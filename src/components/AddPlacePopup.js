import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup(props) {

	const [ title, setTitle ] = React.useState('');
	const [ link, setLink ] = React.useState('');

	function handleTitleChange(evt) {
		setTitle(evt.target.value);
	}
	
	function handleLinkChange(evt) {
		setLink(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onAddPlace({
			title: title,
			link: link
		});
		setTitle('');
		setLink('');
	}

	return(
		<PopupWithForm
			name="add-image"
			title="New place"
			isOpen={props.isOpen}
			onClose={props.onClose}
			submitText="Create"
			onSubmit={handleSubmit}
			>
			<input
				id="imgTitle-input"
				className="popup__input popup__input_content_add-image-title"
				type="text"
				name="imageTitle"
				placeholder="Title"
				minLength="1"
				maxLength="30"
				value={title}
				onChange={handleTitleChange}
				required
				/>
			<span
				id="imgTitle-input-error"
				className="popup__input-error-msg"
				/>
			<input
				id="imgLink-input"
				className="popup__input popup__input_content_add-image-link"
				type="url"
				name="imageLink"
				placeholder="Image link"
				value={link}
				onChange={handleLinkChange}
				required
			/>
			<span
				id="imgLink-input-error"
				className="popup__input-error-msg"
			/>
		</PopupWithForm>
	)
}