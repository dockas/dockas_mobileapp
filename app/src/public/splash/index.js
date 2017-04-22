import React from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Logo from "../../components/logo";

export default class Component extends React.Component {

    static navigationOptions = {
        headerVisible: false,
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        // Wait
        setTimeout(()=>{
            navigate("Login");
        }, 1000);
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
});
