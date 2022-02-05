import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordSearch from './WordSearch';
import MultipleWordDefinitions from './MultipleWordDefinitions';
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
                    element={<MultipleWordDefinitions />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
