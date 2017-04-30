import React from "react";
import {
    View,
    StyleSheet,
    BackAndroid
} from "react-native";
import Logo from "../../commons/logo";
import IconLabel from "../../commons/fa-icon-label";

export  default class Component extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: <IconLabel name="calendar" label="Assinaturas" />
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
