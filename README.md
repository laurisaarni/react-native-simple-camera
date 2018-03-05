# RNCamera

A sample project for React Native Camera.

## How to use the Component in your app

To use the Camera Component in your app you need to do following steps.

### Install dependencies

First, install react-native-camera package

```
yarn add react-native-camera react-native-loading-spinner-overlay
```

Secondly, link the package to your codebase by running

```
react-native link react-native-camera
```
If this does not work correctly. Please follow the manual installation steps: [See the documentation](https://github.com/react-native-community/react-native-camera#manual-install)

### Add Component to your app

First, copy `CameraContainer` folder from `src` folder to your app ie. to `src/components/core/CameraContainer` folder.

Then, in your container Component where you want to use the camera import it.

`import CameraContainer from '../core/CameraContainer'`

Then use the component in your `render` function.

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

## Sample project

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You should have following CLI tools installed.

```
yarn
react-native
```

### Installing

1. Clone from the git repository.

```
git clone git@git.web-essentials.asia:lauri/RNCamera.git ~/dev/react/RNCamera && cd ~/dev/react/RNCamera
```

Install all dependencies.

```
yarn install
```

## Deployment

Start the bundler
```
yarn start
```

Run on your emulator / device
```
react-native run-android
```

## License

This project is licensed under the MIT License
