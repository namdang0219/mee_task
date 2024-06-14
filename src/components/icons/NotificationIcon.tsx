import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from '@react-navigation/native';

const NotificationIcon = () => {
  const {colors} = useTheme()
  return (
    <Ionicons name="notifications-outline" size={28} color={colors.text}></Ionicons>
  )
}

export default NotificationIcon