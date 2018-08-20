import React from "react";
import { Container, Button, Content, Text } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Index extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Button full rounded primary
                            style={{ marginTop: 10 }}
                            onPress={ () => Actions.login() }>
                        <Text>Sign out</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

}
