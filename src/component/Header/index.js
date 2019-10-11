import React from 'react';

import './../../assets/css/header.css';
import './../../assets/css/block/photoCard.css';

export default function Header({image, name, profession}) {
	return (
		<header className="header">
			<div className="mainInfo">
				<div className="photoCard">
					<div className="photoCard-content">
						<img src={image}
							alt="User avatar" className="photoCard-image" />
					</div>
				</div>
				<h1 className="name">{name}</h1>
				<span className="profession">{profession}</span>
				<hr className="separator" />
			</div>
		</header>
	);
}