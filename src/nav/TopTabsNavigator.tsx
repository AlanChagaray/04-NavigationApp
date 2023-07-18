import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { colors } from '../theme/appTheme';

const Tab = createMaterialBottomTabNavigator();

export const TopTabsNavigator = () => {

  const {top}= useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{padding: top}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) =>{
          let iconName: string='';
  
          switch (route.name) {
            case "ChatScreen":
              iconName = "Ch"
              break;
              case "ContactScreen":
                iconName = "Co"
                break;
                case "AlbumScreen":
              iconName = "Al"
              break;
          }
  
          return <Text style={{ color: colors.primary }}>{iconName}</Text>
        }
      } )}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
}
