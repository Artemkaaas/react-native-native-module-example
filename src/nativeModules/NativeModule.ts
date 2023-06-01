import { NativeModules, NativeEventEmitter, EmitterSubscription } from 'react-native'

const NativeMethods = NativeModules.NativeMethods
const EventEmitter = new NativeEventEmitter(NativeMethods)

class NativeModule {
  private native
  private requestConnectionSubscription: EmitterSubscription | undefined

  public constructor(native: any) {
    this.native = native
  }

  public async requestConnectionWithPromise() {
    return await this.native.requestConnectionWithPromise('ConnectionWithPromise')
  }

  public async requestConnectionWithCallback(callback: (value: string) => void) {
    this.native.requestConnectionWithCallback('ConnectionWithCallback', callback, () => {
      return
    })
  }

  public requestConnectionWithListener() {
    this.native.requestConnectionWithListener('ConnectionWithListener')
  }

  public setRequestConnectionListener(listener: (value: string) => void) {
    this.requestConnectionSubscription = EventEmitter.addListener(NativeMethods.EVENT_REQUEST_CONNECTION, listener)
  }

  public removeRequestConnectionListener() {
    this.requestConnectionSubscription?.remove()
  }
}

export default new NativeModule(NativeMethods)
