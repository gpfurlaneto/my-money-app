import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { login, signup } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import If from '../common/comparator/if'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = { loginMode: true }
    }

    changeMode(){
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values){
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <div className='login-box'>
                <div className='login-logo'><b>My</b> Money</div>
                <div className='login-box-body'>
                    <p className='login-box-msg'>Wellcome!</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type='input' name='name'
                            placeholder='Name' icon='user' hide={loginMode} />
                        
                        <Field component={Input} type='email' name='email'
                            placeholder='E-mal' icon='envelope' />
                        
                        <Field component={Input} type='password' name='password'
                            placeholder='Password' icon='lock' />
                        
                        <Field component={Input} type='password' name='confirm_password'
                            placeholder='Confirm password' icon='lock' hide={loginMode} />
                        <Row>
                            <Grid cols='4'>
                                <button type='submit' className='btn btn-primary btn-lock btn-flat'>
                                    {loginMode ? 'Log in': 'Sign up'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br />
                    <a onClick={() => this.changeMode()}>
                        { loginMode ? "Don't have an account? Sign up!": "Already have an account? Log in!"}
                    </a>
                </div>
                <Messages />
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)