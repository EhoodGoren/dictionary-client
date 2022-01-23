import React from "react";
import './WordDefinition.css';

const WordDefinition = ({ result: { word, part_of_speech, definition } }) => {
    return (
        <div className='results'>
            <h1 className='searched-word'>{word}</h1>
            <h3 className='word-parts'><i>{part_of_speech}</i></h3>
            <div className='definitions'>{definition}</div>
        </div>
    )
}

export default WordDefinition;
