import React, { useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WordSearch = ({ setWordData, setRoute }) => {
    const wordInput = useRef();
    const navigate = useNavigate();

    const searchWord = async (e) => {
        e.preventDefault();
        const currentInput = wordInput.current.value;
        setRoute(currentInput);
        try {
            const response = await axios.get(`http://localhost:8080/${currentInput}`);
            setWordData(response.data);
            navigate(`/${currentInput}`);
        } catch (error) {
            setWordData([]);
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
