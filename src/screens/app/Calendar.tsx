import { View, Text } from 'react-native'
import React from 'react'
import { SafeView } from 'components/layouts'
import HeaderContainer from '../../components/header/HeaderContainer';

const Calendar = () => {
  return (
    <SafeView style={{paddingHorizontal: 0}}>
      <HeaderContainer title='Calendar'></HeaderContainer>
    </SafeView>
  )
}

export default Calendar