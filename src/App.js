import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Header from './components/hederComponent/Header'
import Layout from './components/layoutComponent/Layout'
import HomePage from './pages/homePage/HomePage'
import ViewPage from './pages/viewPage/ViewPage'
import NavBar from './components/navBarComp/NavBar';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="App container-fluid">
        <Header />
        <Layout>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/home' exact component={HomePage} />
            <Route path='/view' exact component={ViewPage} />
          </Switch>
        </Layout>
        </div>
      </Router>
    
      </div>
  );
}

export default App;
