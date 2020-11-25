import React, { useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import {
  ArticlePage,
  Home,
  Login,
  Profile,
  QuestionsPage,
  Register,
  ResultPage,
  SplashScreen,
} from "./screens";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const AuthContext = createContext();

export default function Route() {
  const isAuth = useSelector((state) => state.users.isAuthentication);
  const userToken = useSelector((state) => state.users.token);
  const isLoading = useSelector((state) => state.users.isLoading);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth || userToken === null ? (
          <>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ResultPage" component={ResultPage} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ArticlePage" component={ArticlePage} />
            <Stack.Screen name="QuestionsPage" component={QuestionsPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
