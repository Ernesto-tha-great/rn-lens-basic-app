import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Profiles,
  LensProvider,
} from "@lens-protocol/react-native-lens-ui-kit";
import ProfileView from "./ProfileView";
import ViewFollowing from "./ViewFollowing";
import ViewComments from "./ViewComments";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000",
  },
};
export default function App() {
  return (
    <LensProvider theme="dark">
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Profiles" component={ProfileComponent} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
          <Stack.Screen name="ViewComments" component={ViewComments} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

function ProfileComponent({ navigation }) {
  return (
    <Profiles
      onProfilePress={(profile) => navigation.navigate("Profile", { profile })}
    />
  );
}
