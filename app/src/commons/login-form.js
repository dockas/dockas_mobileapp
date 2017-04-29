import React from "react";
import PropTypes from "prop-types";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from "react-native";

export default class Component extends React.Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired
    }

    static defaultProps = {
        onLogin: () => alert("Ok")
    }

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };
    }

    login() {
        this.props.onLogin();
    }

    render() {
        return (
            <View>

                <TextInput
                    onChangeText={(login) => this.setState({ login })}
                    value={this.state.login}
                    placeholder="Login"
                    style={styles.field}
                />

                <TextInput
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder="Password"
                    style={styles.field}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Text style={styles.button} onPress={() => alert("Ok")}>Solicitar Convite</Text>

                    <Text style={[styles.button, styles.left]} onPress={this.props.onLogin}>Entrar</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    field: {
        width: 300,
        marginTop: 20
    },
    button: {
        marginTop: 40,
        color: "#333"
    },
    left: {
        textAlign: "right"
    }
});
