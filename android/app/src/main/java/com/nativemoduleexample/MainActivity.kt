package com.nativemoduleexample

import com.facebook.react.ReactActivity
import android.os.Bundle;
import android.system.ErrnoException;
import android.system.Os;
import java.io.File;

class MainActivity : ReactActivity() {
    override fun getMainComponentName() = "NativeModuleExample"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        try {
            Os.setenv("EXTERNAL_STORAGE", getExternalFilesDir(null)?.getAbsolutePath(), true)
            System.loadLibrary("indy")
        } catch (e: ErrnoException) {
            e.printStackTrace()
        }
    }
}
