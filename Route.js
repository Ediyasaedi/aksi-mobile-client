import React, { useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, TextInput, Button } from "react-native";
import {
  ArticlePage,
  Home,
  Login,
  Profile,
  QuestionsPage,
  Register,
  ResultPage,
  SignIn,
  SplashScreen,
} from "./screens";
import { useSelector } from "react-redux";
import { Logo, ProfileIcon } from "./components/index";

const Stack = createStackNavigator();
export const AuthContext = createContext();

export function Route() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: data });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken != null ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                  headerRight: () => <ProfileIcon navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                  headerRight: () => <ProfileIcon navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="ResultPage"
                component={ResultPage}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                  headerRight: () => <ProfileIcon navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="ArticlePage"
                component={ArticlePage}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                  headerRight: () => <ProfileIcon navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="QuestionsPage"
                component={QuestionsPage}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                  headerRight: () => <ProfileIcon navigation={navigation} />,
                })}
              />
            </>
          ) : (
            <>
              {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
              <Stack.Screen
                name="Login"
                component={Login}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                })}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={({ navigation, route }) => ({
                  headerTitle: (props) => <Logo navigation={navigation} />,
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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

function SignInScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}
