import React, { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import WordDefinition from './WordDefinition';
import BackButton from '../BackButton';

const PartOfSpeechWord = () => {
    const { part } = useParams();
    const { search } = useLocation();
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const searchQueries = new URLSearchParams(search);
        const startingQuery = searchQueries.get('letter') || '';
        const searchWord = async () => {
            try {
                const response = await axios.get(`https://92ey43hrb3.execute-api.eu-west-1.amazonaws.com/production/part-of-speech/${part}?letter=${startingQuery}`);
                setSearchData(response.data);
            } catch (error) {
                setSearchData('');
            }
        }
        searchWord();
    }, [part, search]);

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

export default PartOfSpeechWord;
