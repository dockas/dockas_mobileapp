import React from "react";
import {
    View
} from "react-native";
import styles from "./styles";
import Logo from "../../commons/logo";
import LoginForm from "../../commons/login-form";
import utils from "../../commons/utils";

export default class Component extends React.Component {

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(utils.resetNavigationTo("Private"));
        }, 1000);
    }

    render () {
        return (
            <View style={styles.container}>

                {/*Logo Form*/}
                <Logo name={true} position="center" />

                {/*Login Form*/}
                <LoginForm onLogin={()=>{
                    this.props.navigation.dispatch(utils.resetNavigationTo("Private"));
                }} />

            </View>
        );
    }

}
