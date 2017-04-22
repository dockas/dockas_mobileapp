import React from "react";
import {
    View,
    StyleSheet,
    BackAndroid
} from "react-native";
import Logo from "../../components/logo";

export  default class Component extends React.Component {

    static navigationOptions = {
        headerVisible: false,
        title: "Assinaturas",
        // tabBarVisible: false,
    }

    componentDidMount() {
        BackAndroid.addEventListener("hardwareBackPress", ()=>{
            // TODO: Check if user want to leave
            alert("Deseja sair?");
            return true;
        });
    }

    render () {
        return (
            <View style={styles.container}>

                {/*Logo Form*/}
                <Logo name={true} position="center" />

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
