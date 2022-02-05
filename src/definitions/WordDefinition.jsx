import React from "react";
import { useNavigate } from "react-router-dom";
import './WordDefinition.css';

const WordDefinition = ({ result: { word, part_of_speech, definition } }) => {
    const navigate = useNavigate();

    const generateDefinition = (text) => {
        if (!text) return
        const splitText = text.split(' ');
        return splitText.map((textPart, index) => (
            <span key={`definition-word-${index+1}`}>
                <span
                    className="definition-word"
                    onClick={() => navigateToWord(textPart)}
                >{textPart}</span>
                {' '}
            </span>
        ));
    }
    const navigateToWord = (searchWord) => {
        const plainWord = searchWord.replace(/[^\w-]/g, '')
        navigate(`/${plainWord}`)
    }
    return (
        <div className='results'>
            <h1 className='searched-word'>{word}</h1>
            <h3 className='word-parts'><i>{part_of_speech}</i></h3>
            <div className='definitions'>{generateDefinition(definition)}</div>
        </div>
    )
}

export default WordDefinition;
