import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Hebergement from './pages/Hebergement/Hebergement'
import Activites from './pages/Activites/Activites'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faChildReaching,
    faCircle,
    faDog,
    faHeart,
    faInfo,
    faLocationDot,
    faMagnifyingGlass,
    faMoneyBill1Wave,
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faCircle,
    faLocationDot,
    faMagnifyingGlass,
    faMoneyBill1Wave,
    faChildReaching,
    faHeart,
    faDog,
    faInfo
)

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
