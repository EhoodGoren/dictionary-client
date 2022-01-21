import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';

const WordDefinition = () => {
    const { word } = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const searchWord = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/${word}`);
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
            <div key={`definition${index+1}`}>
                <h1>{word}</h1>
                <h2>{part_of_speech}</h2>
                <div>{definition}</div>
            </div>
        ))
    }
    
    return(
        <div>
            {generateDefinitions()}
        </div>
    )
}

export default WordDefinition;
