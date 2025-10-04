import Header from './components/header/Header.tsx' 
import Footer from './components/footer/Footer.tsx' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/index.tsx' 
import About from './components/pages/About/index.tsx' 

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' Component={ Home } />
            <Route path='/about' Component={ About } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
