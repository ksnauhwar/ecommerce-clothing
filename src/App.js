import React from 'react';
import logo from './logo.svg';
import {Route,Switch,Link,useParams} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import {auth,createUserAuthDocument} from './firebase/firebase.util';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    };

  }
  unsubscribeAuth = null;
  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
                          if(userAuth){
                            const userRef =  await createUserAuthDocument(userAuth);
                            userRef.onSnapshot((snapshot)=>{
                             this.setState({
                               currentUser:{
                                id:snapshot.id,
                                ...snapshot.data()
                               }
                             });

                            });
                          }else{
                            this.setState({currentUser:null});
                          }
                        });
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signIn" component={SignInSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
