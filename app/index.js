import Login from "./src/public/login";
import Splash from "./src/public/splash";
import Private from "./src/private";

import { StackNavigator } from "react-navigation";

// Make a stack navigation Scheme
const routes = StackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    Private: {screen: Private}
});

routes.navigationOptions = {
    headerVisible: false,
};

export default routes;
