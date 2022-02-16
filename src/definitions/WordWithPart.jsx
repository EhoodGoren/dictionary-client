import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import WordDefinition from "./WordDefinition";
import BackButton from "../BackButton";

const WordWithPart = () => {
    const { word, partOfSpeech } = useParams();
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const searchWord = async () => {
            try {
                const camelCaseWord = `${word.slice(0,1).toUpperCase()}${word.slice(1)}`;
                const response = await axios.get(`https://92ey43hrb3.execute-api.eu-west-1.amazonaws.com/production/${camelCaseWord}/${partOfSpeech}`);
                setSearchData(response.data);
            } catch (error) {
                setSearchData('');
            }
        }
        searchWord();
    }, [word, partOfSpeech]);

    const generateDefinition = () => {
        if(searchData === '') return <div>No matches</div>
        return (
            <WordDefinition result={searchData} />
        )
    }
    
    return(
        <div>
            <BackButton />
            {generateDefinition()}
        </div>
    )
}

export default WordWithPart;
