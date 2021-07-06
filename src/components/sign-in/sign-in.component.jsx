import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
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
		});
		console.log(this.state);
	}
	
	render(){
		return (<div className="sign-in">
                <h2 className="heading-secondary">I already have an account</h2>
                <h4 className="heading-tertiary">Sign In with your Email and Password</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} placeholder="Email Adress" autoComplete="off" label="Email Address"/>
                    <FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} placeholder="Password" label="Password"/>
                        
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
                    	<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
					</div>
                  
            </form>
        </div>);
	}
}


export default SignIn;