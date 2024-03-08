
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import BookingForm from './components/BookingForm';
import MetaTags from './components/MetaTags';
import Menu from './components/Menu';
import ogImage from "./assets/banner.jpg"
import Story from './components/Story';

function App() {
  return (
    <>
    <MetaTags ogImage={ogImage} />
    <Nav />
    <Main />
    <Menu />
    <Story />
    <Footer />

   </>
  );
}

export default App;
