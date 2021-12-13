import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Main from './pages/MainPage';
import Detail from './pages/DetailPage';
import Search from './pages/SearchPage';
import Test from './pages/TestPage';
import Auth from './pages/AuthPage';
import AuthSuccess from './pages/AuthSuccessPage';


function App() {

    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/search/:search" element={<Search />} />
                <Route path="/test" element={<Test />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/success/" element={<AuthSuccess />} />
            </Routes>
        </Fragment>
    );
}
export default App;