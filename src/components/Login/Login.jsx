import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField(
                'Email',
                [required],
                'email',
                Input)}

            {createField(
                'Password',
                [required],
                'password',
                Input,
                {type: 'password'})}

            {createField(
                null,
                [],
                'rememberMe',
                Input,
                {type: 'checkbox'},
                'remember Me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField(
                "Symbols from image",
                [required],
                'captcha',
                Input,
                {})
            }

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>

        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    }
    return <div>
        <hi>LOGIN</hi>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps, {login})(Login);