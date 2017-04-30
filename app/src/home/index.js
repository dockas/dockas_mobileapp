import Shopping from "./shopping";
import Orders from "./orders";
import Notifications from "./notifications";
import Subscriptions from "./subscriptions";
import QRReader from "./qr-reader";

import { TabNavigator } from "react-navigation";

/*
 * app.home Navigation
 */

// Tab navigation
const routes = TabNavigator({
    Shopping: {screen: Shopping},
    Orders: {screen: Orders},
    Notifications: {screen: Notifications},
    Subscriptions: {screen: Subscriptions},
    QRReader: {screen: QRReader},
},{
    header: null,
    showLabel: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
        // activeTintColor: "#f9690e",
        indicatorStyle: {
            backgroundColor: "#f9690e"
        },
        tabStyle: {
            // color: "#f9690e",
            // borderColor:  "#f9690e",
            // borderStyle: "dashed",
            // borderWidth: 1,
        },
        labelStyle: {
            color: "#f9690e",
        },
        style: {
            backgroundColor: "white",
        }
    }
});

export default routes;
