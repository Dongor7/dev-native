import {Container, Content, Button} from "native-base";
import React from 'react';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Button title="Sign in" onPress={ () => Actions.home() } />
                    <Button title="Sign up" onPress={ () => Actions.registration() } />
                </Content>
            </Container>
        );
    }

}