import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyCarousel from "./App.js";
import Bio from "./bio.js"; // Certifique-se de que este arquivo existe e está correto

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MyCarousel}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Bio" component={Bio} options={{ title: "Bio" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
