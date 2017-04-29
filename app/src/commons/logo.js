import React from "react";
import {
    View,
    Image,
} from "react-native";
import images from "../commons/images";


export default class Component extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Image
                  source={images.logo}
                />
            </View>
        );
    }
}
