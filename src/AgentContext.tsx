import { Agent } from '@aries-framework/core'
import { createContext, useContext } from 'react'

interface AgentContextState {
  agent: Agent | undefined
}
export const AgentContext = createContext<AgentContextState | undefined>(undefined)

export const useAgent = () => {
  const agentContext = useContext(AgentContext)
  if (!agentContext) {
    throw new Error('AgentContext is not set')
  }
  return agentContext
}
