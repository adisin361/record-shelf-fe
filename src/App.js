import './App.css';
import Home from './Pages/Home';
import Records from './Pages/Records';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HOME_ROUTE, RECORDS_ROUTE, GENRE_ROUTE } from './Constants/routes';
import Genre from './Pages/Genre';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />}></Route>
          <Route path={RECORDS_ROUTE} element={<Records />}></Route>
          <Route path={GENRE_ROUTE} element={<Genre />} ></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
