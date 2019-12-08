import React from 'react';

import '../../assets/css/block/infoCard.css';

export function Profile({ description }) {
    return (
        <InfoCard title="Profile">
            <span className="infoCard-item">{description}</span>
        </InfoCard>
    );
}

export function Contact({ contact }) {
    if (contact == null)
        return null;

    const { tel, cel, address, website, mail } = contact;
    return (
        <InfoCard title="Contact">
            <div className="infoCard-itemContainer">
                <span className="infoCard-item">{tel}</span>
                <span className="infoCard-item">{cel}</span>
            </div>

            <div className="infoCard-itemContainer">
                <span className="infoCard-item">{address}</span>
            </div>

            <div className="infoCard-itemContainer">
                <span className="infoCard-item">{website}</span>
                <span className="infoCard-item">{mail}</span>
            </div>
        </InfoCard>
    );
}

export function Skills({ skills }) {
    if (skills == null)
        return null;

    return (
			<InfoCard title="Skills">
					{skills.map(skill =>
							(
								<>
										<span className="infoCard-skill">{skill.name}</span>
										<div className="infoCard-skillLoader">
												<div className="infoCard-skillLoaderContent"
														style={{width: skill.value}}></div>
										</div>
								</>
							)
					)}
			</InfoCard>
    );
}

function InfoCard({ title, children }) {
    return (
        <div className="infoCard">
            <h3 className="infoCard-title">{title}</h3>
            <hr className="infoCard-separator" />
            {children}
        </div>
    );
}