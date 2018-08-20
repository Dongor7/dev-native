import React from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/Login";
import RegistrationScreen from "./screens/Registration";

import {finishLoadFonts} from './actions';
import Expo from "expo";
import connect from "react-redux/es/connect/connect";
import {Button, Container, Content, Text} from "native-base";


class MainContainer extends React.Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.props.finishLoadFonts(false);
    }

    render() {
        if (this.props.isLoading) {
            return <Expo.AppLoading />;
        }
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={LoginScreen} title="Login" initial={true}/>
                    <Scene key="registration" component={RegistrationScreen} title="registration"/>
                    <Scene key="home" component={HomeScreen}/>
                </Stack>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    finishLoadFonts(isLoading) {
        dispatch(finishLoadFonts(isLoading));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);