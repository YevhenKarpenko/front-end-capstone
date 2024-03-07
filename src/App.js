
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

import logoUrl from "./assets/Logo.svg"
import ogImage from "./assets/restaurant chef B.jpg"

function App() {
  return (
    <>
    <meta name="og:title" content="Little Lemon Restaurant"/>
    <meta name="description" content="Little Lemon, family owned Mediterranean restaurant, traditional recipes served with a modern twist, food delivery, book a table"/>
    <meta name="og:description" content="Little Lemon, family owned Mediterranean restaurant, traditional recipes served with a modern twist, food delivery, book a table"/>
    <meta name="og:image" content={ogImage}/>



    <Header />
    <Nav logo={logoUrl} />
    <Main />
    <Footer logo={logoUrl} />
    </>
  );
}

export default App;
