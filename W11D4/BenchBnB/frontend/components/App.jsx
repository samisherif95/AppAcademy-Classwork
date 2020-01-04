import React from "react";
import GreetingContainer from './greeting_container'
import LoginFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import {AuthRoute} from '../util/route_util'
import {Route} from 'react-router-dom';
import SearchContainer from './search_container'


const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
        <div>
            <AuthRoute path="/login" component={LoginFormContainer} />
        </div>
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route exact path="/" component={SearchContainer} />
    </div>
);

export default App;