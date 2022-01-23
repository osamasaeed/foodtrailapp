import 'react-native-gesture-handler';
import * as React from 'react';
import { Container, Root } from 'native-base';
import { connect } from 'react-redux';
import { userActions } from './src/config/redux';
import AppNavigator from './src/config/NavigationComponents/AppNavigator';
import AuthNavigator from './src/config/NavigationComponents/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = (props) => {
// switching between navigators, authenticated routes and unauthenticated routes
  const routeSwitch = (isLoggedIn) => (
    isLoggedIn ? <AppNavigator /> : <AuthNavigator isLoggedIn={isLoggedIn} />
  )
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <Root>
        <Container>
          {routeSwitch(props.loggedIn)}
        </Container>
      </Root>
    </NavigationContainer>
  );
}

const mapStateToProps = (props) => {
  return {
    loggedIn: props.global.loggedIn,
    loading: props.global.loading,
  };
};

const mapDispatchToProps = {
  setLoading: userActions.loading,
  login: userActions.login
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

