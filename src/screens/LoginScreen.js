import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, TextField } from '@material-ui/core';
import { withRouter } from "react-router";
import * as actionCreators from "../actions";
import MeldxButton from '../components/MeldxButton';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            credentials: {
                email: "",
                password: ""
            }
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return this.renderFullScreen();
    }

    renderFullScreen() {
        const { height } = this.state;
        const fullScreenStyle = {
            height,
            minHeight: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#263238",
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }

        return (
            <div style={fullScreenStyle}>
                {this.renderLoginBox()}
            </div>
        )
    }

    renderLoginBox() {
        let style = {
            ...styles.loginBoxStyles,
            width: 400,
            boxShadow: "1px 1px 7px 1px rgba(0, 0, 0, 0.4)"
        }
        return (
            <div style={style}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    {this.renderLoginTitle("Login")}
                    {this.renderPadding(15)}
                    {this.renderLoginError()}
                    {this.renderLoginForm()}
                </div>
            </div>

        )
    }
    renderLoginError(){
        const textStyle = {color:"red", fontStyle:'normal', fontSize:14};
        if (this.props.userLoginFailed){
          return (<p style={textStyle}>{"Failed to sign in. Please check your login details."}</p>);
        }
        
        else{
          return (<div/>);
        }
    
      }
    
    renderLoginTitle(title) {
        return (
            <div style={
                {
                    display: "flex",
                    justifyContent: 'center'
                }
            }>

                <h1>{title}</h1>
            </div>
        );
    }
    renderPadding(height) {
        return (
            <div style={
                { height }
            } />
        );
    }


    renderLoginForm() {
        return (
            <form>
                <FormControl aria-describedby="Email" fullWidth>
                    <TextField id="email" label="Email Address"
                        value={
                            this.state.username
                        }
                        onChange={
                            this.handleChange('email')
                        }
                        margin="normal"
                        variant="outlined" />
                </FormControl>

                <FormControl aria-describedby="password" fullWidth>
                    <TextField id="password" label="Password" type="password"
                        value={
                            this.state.password
                        }
                        onChange={
                            this.handleChange('password')
                        }
                        margin="normal"
                        variant="outlined" />
                </FormControl>
                {this.renderPadding(10)}
                <div>
                    <div style={
                        {
                            display: "flex",
                            justifyContent: 'center'
                        }
                    }>
                        <MeldxButton clickHandler={
                            () => this.onSubmitLogin()
                        }
                            label={"LOG IN"}
                            loading={
                                this.props.loggingIn
                            } />
                    </div>
                </div>
            </form>

        )
    }
    handleChange = name => event => {
        let { credentials } = this.state;
        credentials[name] = event.target.value;
        this.setState({ credentials });
    }
    onSubmitLogin() {
        let {email,password} = this.state.credentials
        this.props.logUserIn({email,password});
    }

}
const styles = {
    loginBoxStyles: {
        borderRadius: 5,
        backgroundColor: "#ffffff",
        padding: 25

    }
};


function mapStateToProps(state) {
    return { token: state.auth.token ,userLoginFailed: state.auth.userLoginFailed};
}


export default withRouter(connect(mapStateToProps, actionCreators)(LoginScreen));
