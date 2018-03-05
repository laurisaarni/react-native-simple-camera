# RNCamera

A sample project for React Native Camera.

## How to use the Component in your app

To use the Camera Component in your app you need to do following steps.

### Install dependencies

First, install the package

```
yarn add RNCamera
```

Secondly, link the package to your code base by running following command.

```
react-native link react-native-camera
```
If this does not work correctly. Please follow the manual installation steps: [See the documentation](https://github.com/react-native-community/react-native-camera#manual-install)

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


#### Scanning bar / QR codes
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
