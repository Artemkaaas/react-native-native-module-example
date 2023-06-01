import Foundation

@objc(NativeMethods)
class NativeMethods: RCTEventEmitter{
  static let EVENT_REQUEST_CONNECTION = "request_connection"

  override func supportedEvents() -> [String]! {
    return [
      NativeMethods.EVENT_REQUEST_CONNECTION
    ]
  }

  @objc
  override func constantsToExport() -> [AnyHashable: Any]!{
    return [
      "EVENT_REQUEST_CONNECTION": NativeMethods.EVENT_REQUEST_CONNECTION
    ]
  }

  @objc
  static override func requiresMainQueueSetup() -> Bool{
    return true;
  }

  @objc
  func requestConnectionWithPromise(_ id: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock){
    resolve(id)
  }

  @objc
  func requestConnectionWithCallback(_ id: String, onSuccess: RCTResponseSenderBlock, onFail: RCTResponseSenderBlock){
    onSuccess([id])
  }

  @objc
  func requestConnectionWithListener(_ id: String){
    self.sendEvent(withName: NativeMethods.EVENT_REQUEST_CONNECTION, body: id)
  }
}
