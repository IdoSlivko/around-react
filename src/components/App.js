import React from 'react';

import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import { api } from '../utils/api.js';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CurrentCardContext } from '../contexts/CurrentCardContext.js';

export default function App() {
  
  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ cards, setCards ] = React.useState([]);
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState({ name: '' , link: '' });

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
    setSelectedCard({
      name: data.name,
      link: data.link,
      likes: data.likes.length
    });
  }
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '' , link: '' });
  }
  
  React.useEffect(() => {
    api.getProfileInfo()
    .then((res) => {
      setCurrentUser(res);
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

  function handleUpdateUser({ name, about }) {
    api.setProfileInfo(name, about)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((error) => console.log("Error from setProfileInfo:", error));
  }

  function handleUpdateAvatar({ avatarLink }) {
    api.setProfileImage(avatarLink)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((error) => console.log("Error from setProfileImage:", error));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeImageStatus(card._id, !isLiked)
		.then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
		.catch((error) => console.log("Error from changeLikeImageStatus:", error));
	}

  function handleCardDelete(card) {
		api.deleteImage(card._id)
		.then((res) => {
			console.log(res.message, 'but most of all Samy is my hero...');
			setCards(cards.filter((item) => item._id !== card._id));
    })
		.catch((error) => console.log("Error from deleteImage:", error));
	}

  function handleAddPlace({title, link}) {
    api.addNewImage(title, link)
		.then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
		.catch((error) => console.log("Error from addNewImage:", error));
  }
  
  return (

    <div className="page">
      
      <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardContext.Provider value={cards}>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
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
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      </CurrentCardContext.Provider>
      </CurrentUserContext.Provider>

      <Footer />

    </div>
  );
}