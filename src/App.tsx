import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about-us" element={<About />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
