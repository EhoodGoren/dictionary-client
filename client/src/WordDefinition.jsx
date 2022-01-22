import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './WordDefinitions.css';

const WordDefinition = () => {
    const { word } = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const searchWord = async () => {
            try {
                const camelCaseWord = `${word.slice(0,1).toUpperCase()}${word.slice(1)}`;
                const response = await axios.get(`http://localhost:8080/${camelCaseWord}`);
                setSearchData(response.data);
            } catch (error) {
                setSearchData('');
            }
        }
        searchWord();
    }, [word]);

    const generateDefinitions = () => {
        if(searchData === '') return <div>No matches</div>
        return searchData.map(({ word, part_of_speech, definition }, index ) => (
            <div key={`definition${index+1}`} className='results'>
                <h1 className='searched-word'>{word}</h1>
                <h3 className='word-parts'><i>{part_of_speech}</i></h3>
                <div className='definitions'>{definition}</div>
            </div>
        ));
    }

    return(
        <div>
            {generateDefinitions()}
        </div>
    )
}

export default WordDefinition;
