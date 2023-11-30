
import { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Navigate} from 'react-router-dom';

const NavigateComponent = ({ navigate }) => {
    return navigate ? <Navigate to={'/feature'} /> : null;
}
class Signup extends Component {
    state = {
        navigate: false
    }
    onSubmit = (formProps) => {
        this.props.signup(formProps,() => {
            this.setState({ navigate: true })
        })
    }

    render() {
        const { handleSubmit } = this.props;
        const { navigate } = this.state;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <NavigateComponent navigate={navigate}/>
                <fieldset>
                    <label> Email</label>
                    <Field name='email' type='text' component={'input'} autoComplete='none' />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field name='password' type='password' component={'input'} autoComplete='none' />

                </fieldset>
                <div> { this.props.errorMessage } </div>
                <button>Submit</button>
            </form>
        )
    }
}


function mapStateToPros(state) {
    return { errorMessage: state.auth.errorMessage }
}
export default 
    connect(mapStateToPros, actions)(reduxForm({ form: 'signup' })(Signup));