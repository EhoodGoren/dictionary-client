import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordSearch from './WordSearch';
import MultipleWordDefinitions from './definitions/MultipleWordDefinitions';
import WordWithPart from './definitions/WordWithPart';
import PartOfSpeechWord from './definitions/PartOfSpeechWord';

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
                    element={<WordWithPart />}
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
