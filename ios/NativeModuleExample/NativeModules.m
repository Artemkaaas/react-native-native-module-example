#import "NativeModuleExample-Bridging-Header.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>

@interface RCT_EXTERN_MODULE(NativeMethods, NSObject)

RCT_EXTERN_METHOD(
                  requestConnectionWithPromise: (NSString *)id
                  resolve: (RCTPromiseResolveBlock)resolve
                  reject: (RCTPromiseRejectBlock)reject
                  )

RCT_EXTERN_METHOD(
                  requestConnectionWithCallback: (NSString *)id
                  onSuccess: (RCTResponseSenderBlock)onSuccess
                  onFail: (RCTResponseSenderBlock)onFail
                  )

RCT_EXTERN_METHOD(
                  requestConnectionWithListener: (NSString *)id
                  )
@end
