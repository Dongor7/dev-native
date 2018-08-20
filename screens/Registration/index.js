import {Container, Content, Button} from "native-base";
import React from 'react';

export default class RegistrationScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Button title="Sign up!" onPress={ () => Actions.home() } />
                </Content>
            </Container>
        );
    }

}