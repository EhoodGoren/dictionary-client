import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import WordDefinition from './WordDefinition';

const PartOfSpeechWord = () => {
    const { part } = useParams();
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const searchWord = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/part-of-speech/${part}`);
                setSearchData(response.data);
            } catch (error) {
                setSearchData('');
            }
        }
        searchWord();
    }, [part]);

    const generateDefinition = () => {
        if(searchData === '') return <div>No matches</div>
        return (
            <WordDefinition result={searchData} />
        )
    }
    
    return(
        <div>
            {generateDefinition()}
        </div>
    )
}

export default PartOfSpeechWord;
