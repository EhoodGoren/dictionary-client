import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import WordDefinition from "./WordDefinition";
// import './WordDefinitions.css';

const MultipleWordDefinitions = () => {
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
        return searchData.map((result, index ) => (
            <WordDefinition key={`definition${index+1}`} result={result} />
        ));
    }

    return(
        <div>
            {generateDefinitions()}
        </div>
    )
}

export default MultipleWordDefinitions;
