import React from 'react';
import './App.css';
import values from './values.json';
import ViewObject from './ViewObject';

function App() {
    return (
        <ViewObject valObject={values} />
    )
}

export default App;
