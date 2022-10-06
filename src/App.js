import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import NavBar from './components/partials/NavBar';
import Home from './components/routes/Home';
import Characters from './components/routes/Characters';
import Character from './components/routes/Character';
import NewCharacter from './components/routes/NewCharacter';
import EditCharacter from './components/routes/EditCharacter';


function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/new' element={<NewCharacter />} />
        <Route path='/characters/:id' element={<Character />} />
        <Route path='/characters/:id/edit' element={<EditCharacter />} />
      </Routes>
    </Router>
  )
}

export default App;
