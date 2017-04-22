import React from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Logo from "../components/logo";
import LoginForm from "../components/login-form";

export  default class Component extends React.Component {

    componentDidMount() {
        console.log("Hellr");
    }

    render () {
        return (
            <View style={styles.container}>

                {/*Logo Form*/}
                <Logo name={true} position="center" />

                {/*Login Form*/}
                <LoginForm />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        width: 380
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});
