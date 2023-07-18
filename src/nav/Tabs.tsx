import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tabs1Screen } from '../screens/Tabs1Screen';
import { StackNavigator } from './StackNavigator';
import { TopTabsNavigator } from './TopTabsNavigator';
import { colors } from '../theme/appTheme';


export const Tabs = () =>{

  return Platform.OS  === 'ios'
      ? <TabsIOS/>
      : <TabsAndroid/>

}


const BottomTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
      
      sceneAnimationEnabled={true}
      barStyle={{ 
        backgroundColor : colors.primary 
      }}
      screenOptions= { ({route}) => ({
      tabBarIcon: ({color, focused}) =>{
        let iconName: string='';

        switch (route.name) {
          case "Tabs1Screen":
            iconName = "T1"
            break;
            case "Tabs2Screen":
              iconName = "T1"
              break;
              case "StackNavigator":
            iconName = "ST"
            break;
        }

        return <Text style={{ color: colors.primary }}>{iconName}</Text>
      }
    } )
    }
    >
      <BottomTabsAndroid.Screen name="Tabs1Screen"    options={  {  title: "Tab 1"}}component={Tabs1Screen} />
      <BottomTabsAndroid.Screen name="Tabs2Screen"    options={{title: "Tab 2"}}component={TopTabsNavigator} />
      <BottomTabsAndroid.Screen name="StackNavigator" options={{title: "Stack"}}component={StackNavigator} />
    </BottomTabsAndroid.Navigator>
  );
}

const BottomTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator 
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    screenOptions= { ({route}) => ({
      tabBarIcon: ({color, focused, size}) =>{
        let iconName: string='';

        switch (route.name) {
          case "Tabs1Screen":
            iconName = "T1"
            break;
            case "Tabs2Screen":
              iconName = "T1"
              break;
              case "StackNavigator":
            iconName = "ST"
            break;
        }

        return <Text style={{ color: colors.primary }}>{iconName}</Text>
      }
    } )
    } >
      <BottomTabsIOS.Screen name="Tabs1Screen"    options={{title: "Tab 1"}}component={Tabs1Screen} />
      <BottomTabsIOS.Screen name="Tabs2Screen"    options={{title: "Tab 2"}}component={TopTabsNavigator} />
      <BottomTabsIOS.Screen name="StackNavigator" options={{title: "Stack"}}component={StackNavigator} />
    </BottomTabsIOS.Navigator>
  );
}