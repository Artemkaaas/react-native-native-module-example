package com.nativemoduleexample.module

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class NativeMethodsPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(NativeMethods(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return mutableListOf()
    }
}

class NativeMethods(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "NativeMethods"

    override fun getConstants() = mapOf(
        "EVENT_REQUEST_CONNECTION" to EVENT_REQUEST_CONNECTION
    )

    @ReactMethod
    fun requestConnectionWithPromise(id: String, promise: Promise) = promise.resolve(id)

    @ReactMethod
    fun requestConnectionWithCallback(id: String, successCallback: Callback, failCallback: Callback) {
        successCallback(id)
    }

    @ReactMethod
    fun requestConnectionWithListener(id: String) =
        reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(EVENT_REQUEST_CONNECTION, id)

    companion object {
        const val EVENT_REQUEST_CONNECTION = "request_connection"
    }
}
