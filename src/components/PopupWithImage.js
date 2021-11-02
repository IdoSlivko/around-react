export default function PopupWithImage(props) {

	return (	
		<section className={`popup popup_large-image ${props.data.name ? 'popup_opened' : ''}`}>
			<figure className="popup__container-large-image">
				<button className="popup__close-button popup__close-large-image" aria-label="close image" onClick={props.onClose}></button>
				<img className="popup__image" src={props.data.link} alt="some text" />
				<figcaption className="popup__caption">{props.data.name}</figcaption>
			</figure>
		</section>
	);
}