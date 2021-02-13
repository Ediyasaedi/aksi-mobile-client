import React, { useEffect, createContext, useMemo } from "react";
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
  ReviewPage,
  SignIn,
  SplashScreen,
} from "./screens";
import { useDispatch, useSelector } from "react-redux";
import { Logo, ProfileIcon } from "./components/index";
import { loginUser, logoutUser, restoreToken } from "./store/action";

const Stack = createStackNavigator();
export const AuthContext = createContext();

export function Route() {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSignout = useSelector((state) => state.auth.isSignout);
  const userToken = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        alert("Login Failed, Please Try Again!");
      }
      dispatch(restoreToken(userToken));
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch(loginUser(data));
      },
      signOut: () => dispatch(logoutUser()),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken != null ? (
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
              <Stack.Screen
                name="ReviewPage"
                component={ReviewPage}
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
