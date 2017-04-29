import React from "react";
import {
    View
} from "react-native";
import styles from "./styles";
import { NavigationActions } from "react-navigation";
import QRReader from "../../commons/qr-reader";

export  default class Component extends React.Component {

    static navigationOptions = {
        header: null,
        title: "QR Reader",
        // tabBarVisible: false,
    }

    goBack() {
        const backAction = NavigationActions.back();
        this.props.navigation.dispatch(backAction);
    }

    render () {
        return (
            <View style={styles.container}>

                {/*QR-Code Reader Form*/}
                <QRReader onRead={(data)=>alert(data)}/>

            </View>
        );
    }

}
