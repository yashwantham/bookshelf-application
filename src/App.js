import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { SearchPage } from './pages/SearchPage/SearchPage';

function App() {
  return (
    <>
      <div className="App">
        <h1>Bookshelf Application</h1>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
