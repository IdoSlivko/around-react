class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
    return res.json();
    } else {
    return Promise.reject(res.statusText);
    }
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
    .then((res) => this._checkResponse(res))
  }

  getServerImages() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
    .then((res) => this._checkResponse(res))
  }

  changeLikeImageStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers,
        method: "PUT",
      })
      .then((res) => this._checkResponse(res))
    } else {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers,
        method: "DELETE",
      })
      .then((res) => this._checkResponse(res))
    }
  }

  deleteImage(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then((res) => this._checkResponse(res))
  }

  setProfileInfo(fullName, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: fullName,
        about: about
      }),
    })
    .then((res) => this._checkResponse(res))
  }

  setProfileImage(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: link
      }),
    })
    .then((res) => this._checkResponse(res))
  }

  addNewImage(imageTitle, imageLink) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: imageTitle,
        link: imageLink
      }),
    })
    .then((res) => this._checkResponse(res))
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "f21cbaab-48ba-469f-bdb9-c2956aed6b6b",
    "Content-Type": "application/json"
  }
});

export default api;