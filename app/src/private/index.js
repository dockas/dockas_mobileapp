import Orders from "./orders";
import Subscriptions from "./subscriptions/";
import QRReader from "./qr-reader";

import { TabNavigator } from "react-navigation";

// Make a Tab navigation Scheme
const routes = TabNavigator({
    Orders: {screen: Orders},
    Subscriptions: {screen: Subscriptions},
    QRReader: {screen: QRReader},
},{
    header: null,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            backgroundColor: "#f9690e"
        }
    }
});

export default routes;
