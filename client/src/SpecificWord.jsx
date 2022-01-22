import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './WordDefinitions.css';

const SpecificWord = () => {
    const { word, partOfSpeech } = useParams();
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const searchWord = async () => {
            try {
                const camelCaseWord = `${word.slice(0,1).toUpperCase()}${word.slice(1)}`;
                const response = await axios.get(`http://localhost:8080/${camelCaseWord}/${partOfSpeech}`);
                setSearchData(response.data);
            } catch (error) {
                setSearchData('');
            }
        }
        searchWord();
    }, [word, partOfSpeech]);

    const generateDefinition = () => {
        if(searchData === '') return <div>No matches</div>
        const { word, part_of_speech, definition } = searchData;
        return (
            <div className='results'>
                <h1 className='searched-word'>{word}</h1>
                <h3 className='word-parts'><i>{part_of_speech}</i></h3>
                <div className='definitions'>{definition}</div>
            </div>
        )
    }
    
    return(
        <div>
            {generateDefinition()}
        </div>
    )
}

export default SpecificWord;
