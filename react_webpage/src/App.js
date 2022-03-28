import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
        <MainPage>
        </MainPage>
        <Routes>
            <Route path='/SignUp' exact={true} element={<SignUp />}/>
        </Routes>
    </div>
  );
}

export default App;
