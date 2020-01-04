import React from 'react';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'))
        
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    render(){
        const title = this.props.formType === 'signup/' ? 'Sign Up' : 'Log In'
        return(
            
            <div className="session-form">
                <h2>{title}</h2>
                <form>
                    <label>Username <input type="text" value={this.state.username} onChange={this.handleInput('username')} /></label>
                    <label>Password <input type="password" value={this.state.password} onChange={this.handleInput('password')} /></label>
                    <button onClick={this.handleSubmit}>{title}</button>
                </form>
            </div>
        );
    }

}
export default SessionForm;