import React from "react";
import { useParams } from 'react-router-dom'

const WordDefinition = ({ data }) => {
    const { word } = useParams();
    console.log(word);
    return(
        <div>
            {data.map(({ word, part_of_speech, definition }, index ) => (
                <div key={`definition${index+1}`}>
                    <h1>{word}</h1>
                    <h2>{part_of_speech}</h2>
                    <div>{definition}</div>
                </div>
            ))}
        </div>
    )
}

export default WordDefinition;
