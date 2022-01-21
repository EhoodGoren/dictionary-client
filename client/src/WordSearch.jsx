import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';

const WordSearch = () => {
    const wordInput = useRef();
    const navigate = useNavigate();

    const searchWord = async (e) => {
        e.preventDefault();
        const currentInput = wordInput.current.value;
        navigate(`/${currentInput}`);
    }
    return (
        <form onSubmit={searchWord}>
            <input ref={wordInput} placeholder='Search a word' required />
            <button type='submit'>Search</button>
        </form>
    )
}

export default WordSearch;
