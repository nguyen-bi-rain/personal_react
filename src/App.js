import Header from './components/Header/Header';
import Case from './components/Case/Case';
import Testimonials from './components/Testimonials/Testimonials';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'
import './App.css';

export default function App(){
  return (
    <div>
      <Header/>
      <Case/>
      <Testimonials/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}