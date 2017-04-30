import {
    StyleSheet,
} from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        alignSelf: "stretch",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    grid: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    wrap: {
        paddingLeft: 60,
        // borderBottomColor: "#eee",
        // borderBottomWidth: 1,

    },
    body: {
        alignSelf: "stretch",
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 40,
        borderLeftColor: "#ababab",
        borderLeftWidth: 2,
    },
    order: {
        fontSize: 10
    },
    items: {
        fontSize: 16,
        paddingTop: 5,
        // color: "#222",
    },
    date: {
        textAlign: "right",
        paddingRight: 40,
        fontSize: 10,
    },
    price: {
        textAlign: "right",
        paddingRight: 40,
        fontSize: 16,
        paddingTop: 5,
    },
});
