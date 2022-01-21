import React, { useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WordSearch = ({ setSearchData, setSearchedWord }) => {
    const wordInput = useRef();
    const navigate = useNavigate();

    const searchWord = async (e) => {
        e.preventDefault();
        const currentInput = wordInput.current.value;
        setSearchedWord(currentInput);
        try {
            const response = await axios.get(`http://localhost:8080/${currentInput}`);
            setSearchData(response.data);
            navigate(`/${currentInput}`);
        } catch (error) {
            setSearchData([]);
        }
    }
    return (
        <form onSubmit={searchWord}>
            <input ref={wordInput} placeholder='Search a word' required />
            <button type='submit'>Search</button>
        </form>
    )
}

export default WordSearch;
