import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import authReducer, {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       validate={[required]}
                       name={'email'}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       name={'password'}
                       type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}/>
                       remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login= (props) => {
    const onSubmit = (formData)=> {
        props.login(formData.email, formData.password,formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    }
    return <div>
        <hi>LOGIN</hi>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state)=> ({
    isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps,{login})(Login);