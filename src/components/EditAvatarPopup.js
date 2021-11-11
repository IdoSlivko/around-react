import React from 'react';

import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup(props) {

	const linkRef = React.useRef();

	function handleSubmit(evt) {
		evt.preventDefault();
		props.onUpdateAvatar({ avatarLink: linkRef.current.value });
		linkRef.current.value = '';
	}

	return(
		<PopupWithForm
			name="edit-profile-image"
			title="Change profile picture"
			isOpen={props.isOpen}
			onClose={props.onClose}
			submitText="Save"
			onSubmit={handleSubmit}
			>
			<input
				id="avatarLink-input"
				className="popup__input popup__input_content_edit-profile-image-link"
				type="url"
				name="avatarLink"
				placeholder="Image link"
				ref={linkRef}
				required
			/>
			<span
				id="avatarLink-input-error"
				className="popup__input-error-msg"
			/>
		</PopupWithForm>
	)
}