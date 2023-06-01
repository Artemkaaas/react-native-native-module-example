import React, { useCallback, useEffect } from 'react'
import { Button, ScrollView } from 'react-native'

import { useAgent } from './AgentContext'
import NativeModule from './nativeModules/NativeModule'

const ConnectionScreen = () => {
  const { agent } = useAgent()

  const findConnection = useCallback(
    async (id: string) => {
      const connection = await agent?.connections.findById(id)
      alert(`Requested Connection with id: ${id}. Connection: ${connection}`)
    },
    [agent]
  )

  // Call native method which returns result in the Promise
  const requestedConnectionWithPromise = async () => {
    const result = await NativeModule.requestConnectionWithPromise()
    await findConnection(result)
  }

  // Call native method which returns result in the callback passed as parameter
  const requestedConnectionWithCallback = () => {
    NativeModule.requestConnectionWithCallback(async (result) => {
      await findConnection(result)
    })
  }

  // Call native method which returns result through the triggering native event
  const requestConnectionWithListener = () => {
    NativeModule.requestConnectionWithListener()
  }

  const onRequestedConnection = async (id: string) => {
    await findConnection(id)
  }

  useEffect(() => {
    NativeModule.setRequestConnectionListener(onRequestedConnection)

    return () => {
      NativeModule.removeRequestConnectionListener()
    }
  }, [])

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Button title="Request Connection with promise" onPress={requestedConnectionWithPromise} />
      <Button title="Request Connection with callback" onPress={requestedConnectionWithCallback} />
      <Button title="Request Connection with listener" onPress={requestConnectionWithListener} />
    </ScrollView>
  )
}

export default ConnectionScreen
