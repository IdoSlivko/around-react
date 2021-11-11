export default function PopupWithForm(props) {

	return (
		<section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__container">
				<form className={`popup__form popup__${props.name}-form`} name={props.name} noValidate onSubmit={props.onSubmit}>
					<button className={`popup__close-button popup__close-${props.name}`} type="button" aria-label="close modal" onClick={props.onClose}></button>
					<h3 className={`popup__title popup__${props.name}-title`}>{props.title}</h3>
					{props.children}
					<button className={`popup__submit popup__${props.name}-submit`} type="submit">{props.submitText}</button>
				</form>
			</div>
		</section>
	);
}