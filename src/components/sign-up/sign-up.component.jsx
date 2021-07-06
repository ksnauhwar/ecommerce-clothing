import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth,createUserAuthDocument } from '../../firebase/firebase.util';



class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
       const {name,value} = event.target;
       this.setState({[name]:value});
    }

    async handleSubmit(event){
        event.preventDefault();
        const {email,displayName,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
            
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserAuthDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }catch(error){
            console.error(error);
        }
        
    }



    render(){

        const {email,displayName,password,confirmPassword} = this.state;

        return (
            <div className="sign-up">
                 <h2 className="heading-secondary">I do not have an account</h2>
                <h4 className="heading-tertiary">Sign Up with your Email and Password</h4>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" placeholder="Enter your name" name="displayName" value={displayName} required label="Enter your name" handleChange={this.handleChange}/>
                    <FormInput type="email" placeholder="Email Address" name="email" value={email} required label="Email Address" handleChange={this.handleChange}/>
                    <FormInput type="password" placeholder="Password" name="password" value={password} required label="Password" handleChange={this.handleChange}/>
                    <FormInput type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} required label="Confirm Password" handleChange={this.handleChange}/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );

    }

}

export default SignUp;