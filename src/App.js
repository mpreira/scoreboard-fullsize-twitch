// IMPORT
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//COMPOSANTS
import TeamLeft from './components/TeamLeft';
import TeamRight from './components/TeamRight';
import Time from './components/Time';
import Remote from './components/Remote';
//FONCTIONS
import './utils/Time';
import './utils/Update';
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
                  <TeamLeft />
                  <Time />
                  <TeamRight />
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
