import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from '@react-navigation/native';

const LanguageIcon = () => {
  const {colors} = useTheme()
  return (
    <Ionicons name="language-outline" size={28} color={colors.text}></Ionicons>
  )
}

export default LanguageIcon