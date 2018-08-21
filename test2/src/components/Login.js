import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Login extends Component {
    state = {
        login: '',
        pass: ''
    }

    loginHandler = event => {
        this.setState({ login: event.target.value })
    }
    passHandler = event => {
        this.setState({ pass: event.target.value })
    }
    authHandler = () => {
        localStorage.setItem('Login', this.state.login);
        localStorage.setItem('Password', this.state.pass);
        this.setState({login: '', pass: ''})
        this.props.history.push('/Dashboard')
    }
    wrongHandler = () => {
        alert('Wrong data!');
        this.setState({login: '', pass: ''})
    }
    render() {
        return (
            <div className='login'>
                <h2>Auth</h2>
                <Input
                    type='text'
                    value={this.state.login}
                    onChange={this.loginHandler}
                    placeholder='Your login' /><br />
                <Input
                    type='password'
                    value={this.state.pass}
                    onChange={this.passHandler}
                    placeholder='Your password' /><br />
                <Button onClick={this.state.login === 'test@email.com' && this.state.pass === 'test'
                    ? this.authHandler 
                    : this.wrongHandler }>Log in</Button>
            </div>
        )
    }
}

export default Login;
