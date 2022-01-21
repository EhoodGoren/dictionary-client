import React, { useRef } from "react";
import axios from 'axios';

const WordSearch = () => {
    const wordInput = useRef();
    const searchWord = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/${wordInput.current.value}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={searchWord}>
            <input ref={wordInput} placeholder='Search a word' />
            <button type='submit'>Search</button>
        </form>
    )
}

export default WordSearch;
