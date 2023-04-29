import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import FullDevice from './Pages/FullDevice';
import MainLayouot from './layouts/MainLayouot';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayouot />}>
                <Route path="" element={<Home />} />
                <Route path="store-react" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="device/:id" element={<FullDevice />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
