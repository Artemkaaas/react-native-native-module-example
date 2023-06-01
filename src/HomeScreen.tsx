import React from 'react'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation: { navigate } }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="ConnectionScreen" onPress={() => navigate('ConnectionScreen')} />
    </SafeAreaView>
  )
}

export default HomeScreen
