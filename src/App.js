import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/sobre'
import Artigos from './pages/Artigos'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
     <Switch>
        <Route exact path='/'  >
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' component={  Home } />
        <Route path='/about'  component={ About } />
        <Route path='/artigos'  component={ Artigos } />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
