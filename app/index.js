import Login from "./src/login";
import Splash from "./src/splash";
import Home from "./src/home";

import { StackNavigator } from "react-navigation";

/*
 * app Navigation
 */

// Make a stack navigation Scheme
const routes = StackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    Home: {screen: Home}
});

routes.navigationOptions = {
    headerVisible: false,
};

export default routes;
