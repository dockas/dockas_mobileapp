import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import Camera from "react-native-camera";
// import autobind from "autobind-decorator";
// import { NavigationActions } from 'react-navigation';

export default class Component extends React.Component {

    static propTypes = {
        cancelButtonVisible: PropTypes.bool,
        cancelButtonTitle: PropTypes.string,
        onRead: PropTypes.func,
        onCancel: PropTypes.func
    }

    static defaultProps = {
        cancelButtonVisible: false,
        cancelButtonTitle: "Cancel",
        onRead: (data)=>{
            Alert.alert("Read:", data);
        },
        onCancel: ()=>{
            Alert.alert("Cancel Pressed");
        },
    }

    onCancel = ()=>{
        // Alert.alert("Closing!");
        // requestAnimationFrame(() =>  {
        // });
        this.props.onCancel("Closing");
    }

    onBarCodeRead = (result)=>{
        this.props.onRead();
        Alert.alert("Read: ", result.data);
    }

    render() {
        return (
            <Camera onBarCodeRead={this.onBarCodeRead} style={styles.camera}>

                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle}/>
                </View>

                {(this.props.cancelButtonVisible)?
                    <TouchableOpacity
                        onPress={this.onCancel}
                        style={styles.button}
                        >
                            <Text>{this.props.cancelButtonTitle}</Text>
                        </TouchableOpacity>
                    :null}

            </Camera>
        );
    }
}

const styles = StyleSheet.create({
    camera: {
        // height: 568,
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center"
    },

    rectangleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },

    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: "#f9690e",
        backgroundColor: "transparent"
    },
    button: {
        padding: 10,
        bottom: 20,
        backgroundColor: "#FF9E61",
    }
});
