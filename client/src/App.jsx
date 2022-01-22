import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordSearch from './WordSearch';
import WordDefinition from './WordDefinition';
import SpecificWord from './SpecificWord';
import PartOfSpeechWord from './PartOfSpeechWord';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<WordSearch /> }
                />
                <Route
                    path='/part-of-speech/:part'
                    element={<PartOfSpeechWord />}
                />
                <Route
                    path={'/:word/:partOfSpeech'}
                    element={<SpecificWord />}
                />
                <Route
                    path={'/:word'}
                    element={<WordDefinition />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
