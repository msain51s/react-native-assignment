import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./screens/ListScreen";
import FormScreen from "./screens/FormScreen";
import ItemScreen from "./screens/ItemScreen";


export type RootStackParamList ={
  ListScreen:undefined,
  FormScreen:undefined,
  ItemScreen:{index:number}
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export function RootNavigation(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListScreen">
            <Stack.Screen name="ListScreen" component={ListScreen}/>
            <Stack.Screen name="FormScreen" component={FormScreen}/>
            <Stack.Screen name="ItemScreen" component={ItemScreen} initialParams={{index:0}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}