import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


export default function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '' , link: ''});
  const [deletedCard, setDeletedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard({name: data.name, link: data.link});
  }
  
  function handleDeleteClick(boolean) {
    setDeletedCard(boolean);
  }

  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '' , link: ''});
    setDeletedCard(false);
  }
  
  return (

    <div className="page">
      
      <PopupWithForm
        name="edit-profile-image"
        title="Change profile picture"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        submitText="Save"
      >
        <input
          id="avatarLink-input"
          className="popup__input popup__input_content_edit-profile-image-link"
          type="url"
          name="avatarLink"
          placeholder="Image link"
          required
        />
        <span
          id="avatarLink-input-error"
          className="popup__input-error-msg"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        submitText="Save"
      >
        <input
          id="fullName-input"
          className="popup__input popup__input_content_full-name"
          type="text"
          name="fullName"
          placeholder="Full name"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          id="fullName-input-error"
          className="popup__input-error-msg"
        ></span>
        <input
          id="about-input"
          className="popup__input popup__input_content_about"
          type="text"
          name="about"
          placeholder="About"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          id="about-input-error"
          className="popup__input-error-msg"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="add-image"
        title="New place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        submitText="Create"
      >
        <input
          id="imgTitle-input"
          className="popup__input popup__input_content_add-image-title"
          type="text"
          name="imageTitle"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          required
        />
        <span
          id="imgTitle-input-error"
          className="popup__input-error-msg"
        ></span>
        <input
          id="imgLink-input"
          className="popup__input popup__input_content_add-image-link"
          type="url"
          name="imageLink"
          placeholder="Image link"
          required
        />
        <span
          id="imgLink-input-error"
          className="popup__input-error-msg"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name="alert-delete"
        title="Are you sure?"
        isOpen={deletedCard}
        onClose={closeAllPopups}
        submitText="Yes"
      />

      <ImagePopup
        data={selectedCard}
        onClose={closeAllPopups}
      />

      <Header />

      <Main 
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick} 
        onDeleteClick={handleDeleteClick}
      />

      <Footer />

    </div>
  );
}