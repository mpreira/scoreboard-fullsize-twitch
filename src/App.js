// IMPORT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//COMPOSANTS
import Time from './components/Time';
import Remote from './components/Remote';
//FONCTIONS
import './utils/Time';
// STYLES
import './App.css';
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <main>
              <div className="inner">
                <div className="box">
                  <Time />
                </div>
              </div>
            </main>
          </div>
        } />
        <Route path="/remote" element={<Remote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
