import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
		this.state = {
			email:'',
			password:''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
	
	handleChange(event){
		const {name,value} = event.target;
		this.setState({[name]:value});
	}
	
	handleSubmit(event){
		event.preventDefault();
		this.setState({
			email:'',
			password:''
		})
	}
	
	render(){
		return (<div className="sign-in">
                <h2 className="heading-secondary">I already have an account</h2>
                <h4 className="heading-tertiary">Sign In with your Email and Password</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="input" type="email" name="email" required placeholder="Email Adress" autoComplete="off"></input>
                        <label className="label">Email Address</label>
                    </div>
                    <div className="form-group">
                        <input className="input" type="password" name="password" required placeholder="Password"></input>
                        <label className="label">Password</label>
                    </div>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
                    	<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
					</div>
                  
            </form>
        </div>);
	}
}


export default SignIn;