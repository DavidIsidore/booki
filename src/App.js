import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/DavidIsidore/booki" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
