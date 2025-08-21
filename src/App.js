// IMPORT
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//COMPOSANTS
import Overlay from './components/Overlay';
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
        <Route path="/overlay" element={
          <Overlay />
        } />
        <Route path="/remote" element={<Remote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
