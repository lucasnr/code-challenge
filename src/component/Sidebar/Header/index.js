import React from 'react';

import './styles.scss';

export default function Header({image, name, profession}) {
	return (
		<header className="header">
			<div className="user">
				<div className="user__avatar">
					<figure className="user__avatar__content">
						<img src={image}
							alt="User avatar" className="user__avatar__image" />
					</figure>
				</div>
				<h1 className="user__name">{name}</h1>
				<span className="user__profession">{profession}</span>
				<hr className="user__separator" />
			</div>
		</header>
	);
}