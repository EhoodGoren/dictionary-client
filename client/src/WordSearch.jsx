import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './WordSearch.css';

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
            <div className="search-bar">
                <select className='part-select'>
                    <option value=''></option>
                    <option value='Noun'>Noun</option>
                    <option value='Verb'>Verb</option>
                    <option value='Adjective'>Adjective</option>
                </select>
                <input className='search-inputs' ref={wordInput} placeholder='Search a word' required />
                <button type='submit' className='search-button'>Search</button>
            </div>
        </form>
    )
}

export default WordSearch;
