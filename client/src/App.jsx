import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordSearch from './WordSearch';
import WordDefinition from './WordDefinition';

const App = () => {
    const [wordData, setWordData] = useState([]);
    const [route, setRoute] = useState();

    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <WordSearch
                            setWordData={setWordData}
                            setRoute={setRoute}
                        />
                    }
                />
                <Route
                    path={`/${route}`}
                    element={
                        <WordDefinition data={wordData} />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
