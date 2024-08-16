import './App.css'
import Navbar from './Componentes/Navbar.jsx'
import Home from './Componentes/Home.jsx'
import Footer from './Componentes/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import RegisterPage from './Componentes/RegisterPage.jsx'
import LoginPage from './Componentes/LoginPage.jsx'


function App() {
  return (
    <>
      <Navbar/>
      {/*<Home />
      <LoginPage/>*/}
      <RegisterPage/>
      {/*<Home/>
      <Home/>*/}     
      <Footer/>
    </>
  );
};

export default App;