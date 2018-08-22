import React, { Component } from 'react';
import { Button, Input, Label } from 'reactstrap';
import { FormErrors } from './FormErrors';

class Login extends Component {
    state = {
        login: '',
        password: '',
        formErrors: {login: '', pass: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    inputHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value))
    }
    //loginHandler = event => { 
      //  this.setState({ login: event.target.value })
    //}
    //passHandler = event => { 
      //  this.setState({ pass: event.target.value })
     //}

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'login':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.login = emailValid ? '' : 'is invalid';
                break;
            case 'password': 
                passwordValid = value.length >= 4;
                fieldValidationErrors.pass = passwordValid ? '': 'too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid}, this.validateForm)
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    authHandler = () => {
        localStorage.setItem('Login', this.state.login);
        localStorage.setItem('Password', this.state.password);
        this.setState({login: '', password: ''})
        this.props.history.push('/Dashboard')
    }
    wrongHandler = () => {
        alert('Wrong data!');
        this.setState({login: '', password: ''})
    }
    render() {
        return (
            <div className='Login'>
                <h2>Sign up</h2>
                <div color='danger' className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <Label for="login">Email</Label>
                <Input
                    name='login'
                    type='text'
                    value={this.state.login}
                    onChange={this.inputHandler}
                    placeholder='Your email' /><br />
                <Label for="password">Password</Label>
                <Input
                    name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.inputHandler}
                    placeholder='Your password' /><br />
                <Button disabled={!this.state.formValid} onClick={this.state.login === 'test@email.com' && this.state.password === 'test'
                    ? this.authHandler 
                    : this.wrongHandler }>Log in</Button>
            </div>
        )
    }
}

export default Login;
