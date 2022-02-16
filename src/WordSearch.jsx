import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './WordSearch.css';

const WordSearch = () => {
    const [searchMode, setSearchMode] = useState('word')
    const wordInput = useRef();
    const partInput = useRef();
    const navigate = useNavigate();

    const searchWord = async (e) => {
        e.preventDefault();
        if(searchMode === 'part-of-speech') return navigate(`/part-of-speech/${partInput.current.value}?letter=${wordInput.current.value}`);
        const currentInput = wordInput.current.value;
        if(partInput.current.value) return navigate(`/${currentInput}/${partInput.current.value}`);
        navigate(`/${currentInput}`);
    }
    return (
        <form onSubmit={searchWord}>
            <div className="search-bar">
                <select className='part-select' ref={partInput} required={searchMode === 'part-of-speech'}>
                    <option value=''></option>
                    <option value='n.'>noun</option>
                    <option value='v.'>verb</option>
                    <option value='a.'>adjective</option>
                    <option value='adv.'>adverb</option>
                    <option value='prep.'>preposition</option>
                    <option value='p.'>pronoun</option>
                </select>
                <input className='search-inputs' ref={wordInput} placeholder={searchMode === 'word' ? 'Search a word' : 'Starting with...'} required={searchMode === 'word'} />
                <button type='submit' className='search-button'>Search</button>
            </div>
            <div className="search-mode">
                Search by:
                <label>
                    <input type='radio' name='search-mode' value='word' onChange={() => setSearchMode('word')} checked={searchMode === 'word'} />
                    Word
                </label>
                <label>
                    <input type='radio' name='search-mode' value='part-of-speech' onChange={() => setSearchMode('part-of-speech')}/>
                    Part of speech
                </label>
            </div>
        </form>
    )
}

export default WordSearch;
