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
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "f21cbaab-48ba-469f-bdb9-c2956aed6b6b",
    "Content-Type": "application/json"
  }
});