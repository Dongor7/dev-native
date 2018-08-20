import React from 'react';
import PropTypes from 'prop-types';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {MODES} from "../../constants";
import {setMode} from "../../actions";
import connect from "react-redux/es/connect/connect";

class AppFooter extends React.Component {

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        active={this.props.mode === MODES.ARTICLES}
                        onPress={
                            () => this.props.setMode(MODES.ARTICLES)}>
                        <Text>Статьии</Text>
                    </Button>
                    <Button
                        active={this.props.mode === MODES.PODCAST}
                        onPress={
                            () => this.props.setMode(MODES.PODCAST)}>
                        <Text>Подкасты</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const mapStateToProps = (state) => ({
    mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
    setMode(mode) {
        dispatch(setMode(mode));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);

AppFooter.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};