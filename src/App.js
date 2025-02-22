
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts';
import StudentForm from './components/StudentForm'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<h1>Pehla Page</h1>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
