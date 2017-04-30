import React from "react";
import {
    View
} from "react-native";
import styles from "./styles";
import { NavigationActions } from "react-navigation";
import QRReader from "../../commons/qr-reader";
import IconLabel from "../../commons/fa-icon-label";

export  default class Component extends React.Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: <IconLabel name="qrcode" label="QR Reader" />
        // title: "QR Reader",
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
