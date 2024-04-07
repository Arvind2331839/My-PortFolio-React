import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/AboutComponent/about';
import Project from './components/ProjectComponent/project';
import Cart from './components/ShoppingCartComponent/cart';
import FoodOrder from './components/FoodOrder/FoodOrder';
import YouTubeClone from './components/YoutubeClone/YouTubeClone';
import Contact from './components/ContactComponent/contact';
import Universal from './components/UniversalComponent/universal';
import AdminPanel from './components/AdminPanelComponent/adminPanel';
import ArogyaSetu from './components/ArogyaSetu/ArogyaSetu';
import Nav from './components/NavComponent/nav';
import Home from './components/HomeComponent/home';
import Footer from './components/FooterComponent/footer';
import BlogApp from './components/BlogApp/BlogApp';
import TechHelp from './components/TechHelp/TechHelp';
import Weather from './components/Weather/Weather';
import Student from './components/Student/Student';
import Portfolio from './components/Portfolio/Portfolio';

export default function App() {
    return <>
        <header className='header'>
            <Nav />
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/shoppingCart' element={<Cart />} />
                <Route path='/blogApp' element={<BlogApp />} />
                <Route path='/food-order' element={<FoodOrder />} />
                <Route path='/YouTubeClone' element={<YouTubeClone />} />
                <Route path='/contactUs' element={<Contact />} />
                <Route path='/universalCertificate' element={<Universal />} />
                <Route path='/mernStack' element={<AdminPanel />} />
                <Route path='/arogyaSetu' element={<ArogyaSetu />} />
                <Route path='/techHelp' element={<TechHelp />} />
                <Route path='/weather' element={<Weather />} />
                <Route path='/student' element={<Student />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </main>
        <br/><br/><br/><br/><br/>
        <footer className='footer'>
            <Footer />
        </footer>
    </>
}
