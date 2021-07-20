import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

import { setCurrentUser } from './redux/user/user.actions';
import {auth,createUserAuthDocument} from './firebase/firebase.util';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  constructor(props){
    super(props);

  }
  unsubscribeAuth = null;
  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
                          if(userAuth){
                            const userRef =  await createUserAuthDocument(userAuth);
                            userRef.onSnapshot((snapshot)=>{
                             this.props.setLoggedInUser({
                               id:snapshot.id,
                               ...snapshot.data()
                              });

                            });
                          }else{
                            this.props.setLoggedInUser(null);
                          }
                        });
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route path="/signIn" exact render={()=>{ return this.props.currentUser ? <Redirect to="/"/> : <SignInSignUpPage/>}}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (disptach) => ({
  setLoggedInUser: (currentUser) => disptach(setCurrentUser(currentUser))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
