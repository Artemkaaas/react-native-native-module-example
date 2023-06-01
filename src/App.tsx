import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useState, useEffect, useCallback } from 'react'

import { AgentContext } from './AgentContext'
import ConnectionScreen from './ConnectionScreen'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator()

const App = () => {
  const [agent, setAgent] = useState<Agent | undefined>(undefined)

  const initAgent = useCallback(async () => {
    const agentInstance = new Agent({
      config: {
        label: 'Aries Agent',
        walletConfig: { id: 'test', key: 'test' },
        connectToIndyLedgersOnStartup: false,
        autoUpdateStorageOnStartup: false,
      },
      dependencies: agentDependencies,
    })

    await agentInstance.initialize()
    return agentInstance
  }, [])

  useEffect(() => {
    if (!agent) {
      initAgent().then((agentInstance) => {
        setAgent(agentInstance)
      })
    }
  }, [agent, initAgent])

  return (
    <AgentContext.Provider value={{ agent }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AgentContext.Provider>
  )
}

export default App
