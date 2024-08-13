import './App.css'
import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import RegisterPage from './componentes/RegisterPage'
import LoginPage from './componentes/LoginPage'


function App() {
  return (
    <>
      <Navbar />
      {/*<Home />
      <LoginPage/>*/}
      <RegisterPage/>
      {/*<Home />
      <Home/>*/}     
      <Footer />
    </>
  )
}

export default App