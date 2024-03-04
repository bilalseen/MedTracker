import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Add from "../pages/Add";
import Scanner from "../pages/Scanner";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator tabBarPosition="top">
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Scanner" component={Scanner} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
