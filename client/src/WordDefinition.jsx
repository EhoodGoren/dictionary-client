import React from "react";

const WordDefinition = ({ data }) => {
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
