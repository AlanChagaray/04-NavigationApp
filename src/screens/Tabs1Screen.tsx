import React from 'react'
import { View ,Text } from 'react-native';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tabs1Screen = () => {
  return (
    <View>
        <Text> Iconos </Text>
        <Text>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="airplane-outline"/>
        </Text>
    </View>
  )

}
