import {NavigationActions} from "react-navigation";

export default {

    resetNavigationTo: (screen) => {
        return NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: screen })]
        });
    },


};
