import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Hebergement from './pages/Hebergement/Hebergement'
import Activites from './pages/Activites/Activites'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/DavidIsidore/booki" element={<Home />} />
                <Route path="/hebergement" element={<Hebergement />} />
                <Route path="/activites" element={<Activites />} />
            </Routes>
        </div>
    )
}

export default App
