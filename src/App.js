import logo from './logo.svg';
import {Route,Switch,Link,useParams} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signIn" component={SignInSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
