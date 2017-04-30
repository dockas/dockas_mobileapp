import React from "react";
import {
    View
} from "react-native";
import styles from "./styles";
import Logo from "../commons/logo";
import utils from "../commons/utils";

export default class Component extends React.Component {

    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.dispatch(utils.resetNavigationTo("Home"));
        },2000);
    }

    render () {
        return (
            <View style={styles.container}>
                {/*Logo*/}
                <Logo name={true} position="center" />
            </View>
        );
    }

}
