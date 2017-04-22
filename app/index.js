import React from "react";
import Login from "./src/login/index";
import {
  StyleSheet,
  View,
} from "react-native";


export default class Component extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Login />
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
    }
});
