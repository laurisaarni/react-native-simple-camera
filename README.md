# react-native-simple-camera

A sample project for React Native Camera.

## How to use the Component in your app

To use the Camera Component in your app you need to do following steps.

### Install dependencies

First, install the package

```
yarn add react-native-simple-camera
```
or the old npm style
```
npm i react-native-simple-camera --save
```

Secondly, link the package to your code base by running following command.

```
react-native link react-native-camera
```
If this does not work correctly. Please follow the manual installation steps: [See the documentation](https://github.com/react-native-community/react-native-camera#manual-install)

At least you need to add following missing parts manually.

#### android/app/src/main/AndroidManifest.xml
Add to beginning of the manifest.
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
    package="com.kamera">
```
Add necessary permissions.

```
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-feature android:name="android.hardware.camera" />
```

#### android/build.gradle
Add maven urls to the end off your build.gradle file as follows.
```
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        maven {
            url "https://maven.google.com"
        }
        maven { url "https://jitpack.io" }
    }
}
```

### Add Component to your app

You can use it as camera or barcode scanner.

#### Capturing photos
```
<CameraContainer
  mode="photo"
  onCapturePhoto={
    (data) => console.log('Image captured!', data)
  }
/>
```

##### onCapturePhoto function

When a photo is captured the `onCapturePhoto` function provided as a property will be called. It will receive `data` object as its parameter. `data` contains information related to the image captured.


#### Scanning bar codes and QR codes
```
<CameraContainer
  mode="scanner"
  onBarCodeRead={
    (barcode) => console.log('Barcode Found!', 'Type: ' + barcode.type + '\nData: ' + barcode.data)
  }
/>
```

##### onBarCodeRead function

When the app reads a QR code the `onBarCodeRead` function provided as a property will be called. It will receive `barcode` object as its parameter. `barcode` contains information related to the code captured. Returned data contains type of the code and data that it contained.


## License

This project is licensed under the MIT License
