import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from '@react-navigation/native';

const SettingIcon = () => {
  const {colors} = useTheme()
  return (
    <AntDesign name="setting" size={28} color={colors.text}></AntDesign>
  )
}

export default SettingIcon