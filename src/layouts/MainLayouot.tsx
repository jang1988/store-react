import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const MainLayouot: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
            <Outlet />
            </div>
        </div>
    );
};

export default MainLayouot;
