import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profiles } from "@lens-protocol/react-native-lens-ui-kit";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profiles" component={ProfileComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProfileComponent({ navigation }) {
  return <Profiles navigation={navigation} />;
}
