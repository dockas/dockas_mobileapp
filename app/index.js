import Login from "./src/public/login/index";
import Splash from "./src/public/splash/index";
import Home from "./src/private/index";

import { StackNavigator } from "react-navigation";

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
