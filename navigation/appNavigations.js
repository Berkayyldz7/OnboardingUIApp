import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/HomeScreen";
import OnboardingScreen from "../screen/OnboardingScreen";
import AppFirstScreen from "../screen/AppFirstScreen";

const Stack = createNativeStackNavigator();


const Navigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnboardingUI">
                <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
                <Stack.Screen name="OnboardingUI" options={{headerShown:false}} component={OnboardingScreen} />
                <Stack.Screen name="App" options={{headerShown:false}} component={AppFirstScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation