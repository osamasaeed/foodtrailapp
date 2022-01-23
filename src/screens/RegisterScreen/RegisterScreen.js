import React from 'react'
import { ScrollView } from 'react-native';
import SwiperComponent from './SwiperComponent';
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { userActions } from '../../config/redux';

const RegisterScreen = (props) => {
    const onRegisterSubmit = (data) => {
        console.log(data)
    }
    const onLoginSubmit = (data) => {
        console.log(data);
        props.login(data);
    }
    const onTapFBLogin = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            (result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            //Create response callback.
                            const _responseInfoCallback = (error, result) => {
                                if (error) {
                                    console.log('Error fetching data: ' + error.toString());
                                } else {
                                    const { id, name, first_name, last_name, email } = result;
                                    const user = {
                                        type: "fblogin",
                                        fbid: id,
                                        name,
                                        first_name,
                                        last_name,
                                        email,
                                        password: data.accessToken.toString() // token
                                    }
                                    onLoginSubmit(user);
                                }
                            }
                            // Create a graph request asking for user information with a callback to handle the response.
                            const infoRequest = new GraphRequest(
                                '/me?fields=id,name,first_name,last_name,email&token=' + data.accessToken.toString(),
                                null,
                                _responseInfoCallback,
                            );
                            // Start the graph request.
                            new GraphRequestManager().addRequest(infoRequest).start();
                            // console.log(
                            //     "Login success with permissions: " +
                            //     result.grantedPermissions.toString()
                            // );
                        })
                }
            },
            (error) => {
                console.log("Login fail with error: " + error);
            }
        );
    }
    const onFingerTap = (data) => {
        onLoginSubmit(data);
    }
    const onForgotPassword = (data) => {

    }
    const onResetPassword = (data) => {

    }
    return (
        <ScrollView>
            <SwiperComponent
                onRegisterSubmit={onRegisterSubmit}

                onLoginSubmit={onLoginSubmit}

                onFBLogin={onTapFBLogin}

                onFingerTap={onFingerTap}

                onForgotPassword={onForgotPassword}

                onResetPassword={onResetPassword}
            />
        </ScrollView>
    )
}

const mapDispatchToProps = {
    login: userActions.login
};
export default connect(null, mapDispatchToProps)(RegisterScreen)

