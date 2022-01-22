import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SpecificWord = () => {
    const { word, partOfSpeech } = useParams();
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const searchWord = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/${word}/${partOfSpeech}`);
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
            <div>
                <h1>{word}</h1>
                <h2>{part_of_speech}</h2>
                <div>{definition}</div>
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
