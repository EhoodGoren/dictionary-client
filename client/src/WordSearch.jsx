import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './WordSearch.css';

const WordSearch = () => {
    const wordInput = useRef();
    const partInput = useRef();
    const navigate = useNavigate();

    const searchWord = async (e) => {
        e.preventDefault();
        const currentInput = wordInput.current.value;
        const camelCaseWord = `${currentInput.slice(0,1).toUpperCase()}${currentInput.slice(1)}`
        if(partInput.current.value) return navigate(`/${camelCaseWord}/${partInput.current.value}`);
        navigate(`/${camelCaseWord}`);
    }
    return (
        <form onSubmit={searchWord}>
            <div className="search-bar">
                <select className='part-select' ref={partInput}>
                    <option value=''></option>
                    <option value='noun'>noun</option>
                    <option value='verb'>verb</option>
                    <option value='adjective'>adjective</option>
                </select>
                <input className='search-inputs' ref={wordInput} placeholder='Search a word' required />
                <button type='submit' className='search-button'>Search</button>
            </div>
        </form>
    )
}

export default WordSearch;
