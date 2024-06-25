import { View, Text } from 'react-native'
import React from 'react'
import { SafeView } from 'components/layouts'
import { HeaderContainer } from 'components/header'
import { ThemedText } from 'components/themed'
import { useTheme } from '@react-navigation/native'

const Analytic = () => {
  const {colors} = useTheme()
  return (
    <SafeView style={{paddingBottom: 0}}>
			<HeaderContainer
			style={{paddingHorizontal: 0}}
				title={
					<ThemedText>
						Analytic
					</ThemedText>
				}
			></HeaderContainer>
		</SafeView>
  )
}

export default Analytic