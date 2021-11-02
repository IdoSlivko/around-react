export default function Card(props) {
	
function handleClick() {
	props.onCardClick(props.data);
}

function handleDelete() {
	props.butMostOfAllSammyIsMyHero(true);
}

	return (
		<article className="elements__item">
			<button className="elements__delete-button elements__delete-button_active" type="button" title="Delete image" aria-label="delete image" onClick={handleDelete}></button>
			<img className="elements__image" src={props.data.link} alt={props.data.name} onClick={handleClick} />
			<div className="elements__description">
				<h3 className="elements__title">{props.data.name}</h3>
				<div className="elements__like-section">
					<button className="elements__like-button" type="button" aria-label="like button"></button>
					<div className="elements__like-counter">{props.data.likes.length}</div>
				</div>
			</div>
		</article>
	);
}