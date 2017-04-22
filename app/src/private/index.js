import Orders from "./orders/index";
import Subscriptions from "./subscriptions/index";

import { TabNavigator } from "react-navigation";

// Make a Tab navigation Scheme
const routes = TabNavigator({
    Orders: {screen: Orders},
    Subscriptions: {screen: Subscriptions},
},{
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            backgroundColor: "#f9690e"
        }
    }
});

export default routes;
