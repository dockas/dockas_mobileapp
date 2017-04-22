import React from "react";
import {
    View,
    StyleSheet,
    BackAndroid
} from "react-native";
import Logo from "../../components/logo";
import LoginForm from "../../components/login-form";

export default class Component extends React.Component {

    static navigationOptions = {
        headerVisible: false,
    };

    handleBack() {
        this.exitApp();
        return true;
    }

    // componentDidMount() {
    //     BackAndroid.addEventListener("backPress", this.handleBack.bind(BackAndroid));
    // }

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                {/*Logo Form*/}
                <Logo name={true} position="center" />

                {/*Login Form*/}
                <LoginForm onLogin={()=>{
                    BackAndroid.removeEventListener("backPress");
                    navigate("Home", { user: {name: "Zé Salvino"} });
                }} />

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
