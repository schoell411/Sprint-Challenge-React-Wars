import React from "react";

const CharacterCard = props => {
    return (
        <div className="character">
            <h2 className="character_name">{props.name}</h2>
            <p className="attributes">
            <ul>
            <li>{props.height}</li>
            <li>{props.mass}</li>
            <li>Hair: {props.hair_color}</li>
            <li>Skin: {props.skin_color}</li>
            </ul> 
            </p>
        </div>
    );
}
export default CharacterCard;