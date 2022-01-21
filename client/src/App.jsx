import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordSearch from './WordSearch';
import WordDefinition from './WordDefinition';

const App = () => {
    const [searchData, setSearchData] = useState([]);
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <WordSearch setSearchData={setSearchData} />
                    }
                />
                <Route
                    path={'/:word'}
                    element={
                        <WordDefinition data={searchData} />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
