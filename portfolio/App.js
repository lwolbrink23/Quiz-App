import Question from "./components/Question"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Summary from "./components/Summary";
import Home from "./components/Home";
import Survey from "./components/Survey";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Page' }} />
        <Stack.Screen name="Question" component={Question} options={{ title: 'Question Page' }} />
        <Stack.Screen name="Summary" component={Summary} options={{ title: 'Summary Page' }} />
        <Stack.Screen name="Survey" component={Survey} options={{ title: 'Survey Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});