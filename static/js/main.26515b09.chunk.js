(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(4),s=a.n(c),o=(a(11),a(2)),l=a(0);function r(e){return Object(l.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(l.jsx)("div",{className:"popup__container",children:Object(l.jsxs)("form",{className:"popup__form popup__".concat(e.name,"-form"),name:e.name,noValidate:!0,children:[Object(l.jsx)("button",{className:"popup__close-button popup__close-".concat(e.name),type:"button","aria-label":"close modal",onClick:e.onClose}),Object(l.jsx)("h3",{className:"popup__title popup__".concat(e.name,"-title"),children:e.title}),e.children,Object(l.jsx)("button",{className:"popup__submit popup__".concat(e.name,"-submit"),type:"submit",children:e.submitText})]})})})}function p(e){return Object(l.jsx)("section",{className:"popup popup_large-image ".concat(e.data.name?"popup_opened":""),children:Object(l.jsxs)("figure",{className:"popup__container-large-image",children:[Object(l.jsx)("button",{className:"popup__close-button popup__close-large-image","aria-label":"close image",onClick:e.onClose}),Object(l.jsx)("img",{className:"popup__image",src:e.data.link,alt:"some text"}),Object(l.jsx)("figcaption",{className:"popup__caption",children:e.data.name})]})})}function u(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"logo"})})}var m=a(5),d=a(6),j=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(m.a)(this,e),this._baseUrl=a,this._headers=n}return Object(d.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.statusText)}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getServerImages",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"f21cbaab-48ba-469f-bdb9-c2956aed6b6b","Content-Type":"application/json"}});function _(e){return Object(l.jsxs)("article",{className:"elements__item",children:[Object(l.jsx)("button",{className:"elements__delete-button elements__delete-button_active",type:"button",title:"Delete image","aria-label":"delete image",onClick:function(){e.onDeleteClick()}}),Object(l.jsx)("img",{className:"elements__image",src:e.data.link,alt:e.data.name,onClick:function(){e.onCardClick(e.data)}}),Object(l.jsxs)("div",{className:"elements__description",children:[Object(l.jsx)("h3",{className:"elements__title",children:e.data.name}),Object(l.jsxs)("div",{className:"elements__like-section",children:[Object(l.jsx)("button",{className:"elements__like-button",type:"button","aria-label":"like button"}),Object(l.jsx)("div",{className:"elements__like-counter",children:e.data.likes.length})]})]})]})}function b(e){var t=i.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=i.a.useState("User name"),r=Object(o.a)(s,2),p=r[0],u=r[1],m=i.a.useState("About"),d=Object(o.a)(m,2),b=d[0],h=d[1],f=i.a.useState([]),O=Object(o.a)(f,2),x=O[0],g=O[1];return i.a.useEffect((function(){j.getProfileInfo().then((function(e){c(e.avatar),u(e.name),h(e.about)})).catch((function(e){return console.log("Error from getProfileInfo:",e)}))}),[]),i.a.useEffect((function(){j.getServerImages().then((function(e){g(e)})).catch((function(e){return console.log("Error from getServerImages:",e)}))}),[]),Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("button",{className:"profile__edit-image",title:"Edit profile image",onClick:e.onEditAvatarClick}),Object(l.jsx)("div",{className:"profile__image-container",children:Object(l.jsx)("img",{className:"profile__image",alt:"User profile pic",src:n})}),Object(l.jsxs)("div",{className:"profile__main-text",children:[Object(l.jsxs)("div",{className:"profile__text",children:[Object(l.jsx)("h1",{className:"profile__name",children:p}),Object(l.jsx)("button",{className:"profile__edit-profile",title:"Edit profile","aria-label":"edit profile",onClick:e.onEditProfileClick})]}),Object(l.jsx)("p",{className:"profile__occupation",children:b})]})]}),Object(l.jsx)("button",{className:"profile__add-photo",title:"Add photo","aria-label":"add photo",onClick:e.onAddPlaceClick})]}),Object(l.jsx)("section",{className:"elements",children:x.map((function(t){return Object(l.jsx)(_,{data:t,onCardClick:e.onCardClick,onDeleteClick:e.onDeleteClick},t._id)}))})]})}function h(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Around The U.S."})})}function f(){var e=i.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=i.a.useState(!1),s=Object(o.a)(c,2),m=s[0],d=s[1],j=i.a.useState(!1),_=Object(o.a)(j,2),f=_[0],O=_[1],x=i.a.useState({name:"",link:""}),g=Object(o.a)(x,2),k=g[0],N=g[1],C=i.a.useState(!1),v=Object(o.a)(C,2),S=v[0],y=v[1];function L(){n(!1),d(!1),O(!1),N({name:"",link:""}),y(!1)}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsxs)(r,{name:"edit-profile-image",title:"Change profile picture",isOpen:a,onClose:L,submitText:"Save",children:[Object(l.jsx)("input",{id:"avatarLink-input",className:"popup__input popup__input_content_edit-profile-image-link",type:"url",name:"avatarLink",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{id:"avatarLink-input-error",className:"popup__input-error-msg"})]}),Object(l.jsxs)(r,{name:"profile",title:"Edit profile",isOpen:m,onClose:L,submitText:"Save",children:[Object(l.jsx)("input",{id:"fullName-input",className:"popup__input popup__input_content_full-name",type:"text",name:"fullName",placeholder:"Full name",minLength:"2",maxLength:"40",required:!0}),Object(l.jsx)("span",{id:"fullName-input-error",className:"popup__input-error-msg"}),Object(l.jsx)("input",{id:"about-input",className:"popup__input popup__input_content_about",type:"text",name:"about",placeholder:"About",minLength:"2",maxLength:"200",required:!0}),Object(l.jsx)("span",{id:"about-input-error",className:"popup__input-error-msg"})]}),Object(l.jsxs)(r,{name:"add-image",title:"New place",isOpen:f,onClose:L,submitText:"Create",children:[Object(l.jsx)("input",{id:"imgTitle-input",className:"popup__input popup__input_content_add-image-title",type:"text",name:"imageTitle",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(l.jsx)("span",{id:"imgTitle-input-error",className:"popup__input-error-msg"}),Object(l.jsx)("input",{id:"imgLink-input",className:"popup__input popup__input_content_add-image-link",type:"url",name:"imageLink",placeholder:"Image link",required:!0}),Object(l.jsx)("span",{id:"imgLink-input-error",className:"popup__input-error-msg"})]}),Object(l.jsx)(r,{name:"alert-delete",title:"Are you sure?",isOpen:S,onClose:L,submitText:"Yes"}),Object(l.jsx)(p,{data:k,onClose:L}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{onEditAvatarClick:function(){n(!0)},onEditProfileClick:function(){d(!0)},onAddPlaceClick:function(){O(!0)},onCardClick:function(e){N({name:e.name,link:e.link})},onDeleteClick:function(){y(!0)}}),Object(l.jsx)(h,{})]})}var O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.26515b09.chunk.js.map