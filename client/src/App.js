import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './components/home/Home';
import SearchFeed from './components/search/SearchFeed';
import Register from './components/signup/Register';
import Login from './components/signup/Login';
import HtmlInsertion from './admin/htmlInsertion';
import HtmlDes from './admin/htmlDescinsertion';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Compiler from './compiler/Compiler';
import Courses from './courses/Courses';
import Admin from './admin/Admin';
// import {useSelector,useDispatch} from 'react-redux';
function App() {
    // let isLogin = useSelector((state)=>state.isLogin);
    // isLogin = isLogin || localStorage.getItem('adminId');

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Toaster/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:add/:id' element={<Layout/>}/>
      <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/htmldes' element={<HtmlDes/>}/>
      <Route path='/codeeditor' element={<Compiler/>}/>
      <Route path='/courses' element={<Courses/>}/>
    </Routes>
  
  </BrowserRouter>
    </Provider>
    
  );
}

export default App;
