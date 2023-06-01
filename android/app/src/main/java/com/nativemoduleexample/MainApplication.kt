package com.nativemoduleexample

import android.app.Application
import android.content.Context
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactNativeHost
import com.facebook.soloader.SoLoader
import com.nativemoduleexample.module.NativeMethodsPackage
import java.lang.reflect.InvocationTargetException


class MainApplication : Application(), ReactApplication {
    override fun getReactNativeHost() = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport() = BuildConfig.DEBUG

        override fun getPackages() = PackageList(this).packages.apply {
            add(NativeMethodsPackage())
        }

        override fun getJSMainModuleName() = "index"
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this,  /* native exopackage */false)
    }

}
