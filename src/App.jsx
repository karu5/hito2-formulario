import './App.css'
import Navbar from './componentes/Navbar.jsx'
import Home from './componentes/Home.jsx'
import Footer from './componentes/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import RegisterPage from './componentes/RegisterPage.jsx'
import LoginPage from './componentes/LoginPage.jsx'


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