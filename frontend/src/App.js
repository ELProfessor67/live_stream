import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import Contact from './pages/Contact';
import { Lives } from './pages/Lives';
import Auth from './pages/Auth';
import useOnStartHook from './hooks/useOnStartHook';
import Stream from './pages/Stream';


export default function App() {
  const onStartHook = useOnStartHook();
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/lives' element={<Lives/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/lives/:roomId' element={<Stream/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}