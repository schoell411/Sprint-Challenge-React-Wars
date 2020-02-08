import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function Character () {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        function getCharacter() {
            axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
            })
            .catch(error => {
                console.log("the data was not returned", error);
              });
        };
    getCharacter();    
    }, []);
    return (
        <div className="character">
            {characters.map(char => {
                return (
                    <CharacterCard
                        key={char.name}
                        name={char.name}
                        height={char.height}
                        mass={char.mass}
                        hair_color={char.hair_color}
                        skin_color={char.skin_color}
                    />
                );    
            })}
        </div>
    );
}