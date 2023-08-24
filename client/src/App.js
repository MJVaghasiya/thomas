import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing';
import Home from './components/Home'
import ThailandHome from './components/ThailandHome';
import HoneymoonHome from './components/HoneymoonHome';
import Table from './components/Table'
import Egypt from './components/Egypt  ';
import SingaporeHome from './components/SingaporeHome';
import VietnamHome from './components/VietnamHome';
import UttrakhandHome from './components/UttrakhandHome';
import DubaiHome from './components/DubaiHome';
import JapanHome from './components/JapanHome';
import SaudiArabiaHome from './components/SaudiArabiaHome';
import SothAfricaHome from './components/SothAfricaHome';
import TurkieHome from './components/TurkieHome';
import NorthEastHome from './components/NorthEastHome';
import BhutanHome from './components/BhutanHome';
import MadhyaPradeshHome from './components/MadhyaPradeshHome';
import LadakhHome from './components/LadakhHome';
// import BaliHome from './components/BaliHome';
// import Navbar from './components/BaliHome';
import BaliHome from './components/BaliHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/HoneymoonHome' element={<HoneymoonHome/>}></Route>
        <Route path='/Table' element={<Table/>}></Route>
        <Route path='/thailand'  element={<ThailandHome/>}></Route>
        <Route path='/Singapore'  element={<SingaporeHome/>}></Route>
        <Route path='/Egypt'  element={<Egypt/>}></Route>
        <Route path='/Vietnam' element={<VietnamHome/>} ></Route>
        <Route path='/Uttrakhand' element={<UttrakhandHome/>} ></Route>
        <Route path='/Dubai' element={<DubaiHome/>} ></Route>
        <Route path='/Japan' element={<JapanHome/>} ></Route>
        <Route path='/SaudiArabia' element={<SaudiArabiaHome/>} ></Route>
        <Route path='/SothAfrica' element={<SothAfricaHome/>} ></Route>
        <Route path='/Turkie' element={<TurkieHome/>} ></Route>
        <Route path='/NorthEast' element={<NorthEastHome/>} ></Route>
        <Route path='/Bhutan' element={<BhutanHome/>} ></Route>
        <Route path='/MadhyaPradesh' element={<MadhyaPradeshHome/>} ></Route>
        <Route path='/Ladakh' element={<LadakhHome/>} ></Route>
        <Route path='/Bali' element={<BaliHome/>} ></Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
