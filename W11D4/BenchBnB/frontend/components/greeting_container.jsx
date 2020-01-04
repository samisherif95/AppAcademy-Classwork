import {connect} from 'react-redux';
import Greeting from './greeting';
import {logOut} from '../actions/session_actions'

const mapStateToProps = (state) =>({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);