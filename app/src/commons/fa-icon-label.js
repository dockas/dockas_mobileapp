import React from "react";
import {Text, View} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet} from "react-native";

export default class Component extends React.Component {
    static propTypes = {
        color: PropTypes.string,
        label: PropTypes.string.inRequired,
        name: PropTypes.string.inRequired,
    }

    static defaultProps = {
        color: "#f9690e",
        label: "Label",
        name: "bell-o"
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        label: {
            fontSize: 8,
            color: this.props.color
        }
    });

    render() {
        return(
            <View style={this.styles.container}>
                <Icon name={this.props.name} size={26} color={this.props.color} />
                <Text style={this.styles.label}>{this.props.label}</Text>
            </View>
        );
    }
}
