import LoginScreen from './views/LoginScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import VerifyScreen from './views/VerifyScreen'
import ProfileScreen from './views/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />

      <ToastContainer autoClose={5000} />
      <div className='flex-wrapper'>
        <Container>
          <Switch>
            <Route path='/' component={LoginScreen} exact />
            <Route path='/verifylogin' component={VerifyScreen} exact />
            <Route path='/profile' component={ProfileScreen} exact />
            <Route path='' component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App
