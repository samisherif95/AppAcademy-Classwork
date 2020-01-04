import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn } from '../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'login/'
})

const mapDispatchToProps = dispatch => ({
    processForm: (formUser) => dispatch(logIn(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);